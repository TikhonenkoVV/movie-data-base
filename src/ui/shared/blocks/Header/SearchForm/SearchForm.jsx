import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
    ClearButton,
    Input,
    Item,
    Label,
    List,
    SearchPanel,
    StyledForm,
    StyledLink,
    SubmitButton,
} from './SearchForm.styled';
import { getMediaOnRequest } from 'common/services/api';
import sprite from '../../../../assets/images/sprite.svg';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'ui/shared/components/Loader';
import { Container } from 'ui/shared/layouts/Container/Container';
import { Svg } from 'ui/shared/components/Svg/Svg';
import { selectLang } from 'common/store/selector';
import { useTranslate } from 'hooks/useTranslate';
import { toast, ToastContainer } from 'react-toastify';

export const SearchForm = ({ formRef, ariaHidden }) => {
    const language = useSelector(selectLang);
    const { t } = useTranslate();

    const [isLoading, setIsLoading] = useState(false);
    const [placeholder, setPlaceholder] = useState(t('placeholder'));
    const [warning, setWarning] = useState(false);
    const [query, setQuery] = useState('');
    const [error, setError] = useState();
    const [moviesCount, setMoviesCount] = useState(false);
    const [tvShowsCount, setTvShowsCount] = useState(false);
    const [personsCount, setPersonsCount] = useState(false);
    const [collectionsCount, setCollectionsCount] = useState(false);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (ariaHidden === 'true' || !query) {
            setQuery('');
            setMoviesCount(false);
            setTvShowsCount(false);
            setCollectionsCount(false);
            setPersonsCount(false);
            setTotal(0);
        }
        if (query) {
            setPlaceholder('');
        } else setPlaceholder(t('placeholder'));
    }, [ariaHidden, query, t]);

    useEffect(() => {
        if (moviesCount) setTotal(prev => (prev += moviesCount));
        if (tvShowsCount) setTotal(prev => (prev += tvShowsCount));
        if (personsCount) setTotal(prev => (prev += personsCount));
        if (collectionsCount) setTotal(prev => (prev += collectionsCount));
    }, [moviesCount, tvShowsCount, personsCount, collectionsCount]);

    const hendleChange = e => {
        setQuery(e.target.value);
    };

    const handleClick = () => setQuery('');

    const handleSubmit = e => {
        e.preventDefault();
        if (error) console.log(error);
        if (!query) {
            setWarning(true);
            return;
        }
        setIsLoading(true);
        setWarning(false);
        getMediaOnRequest('movie', query, 1, language)
            .then(data => {
                setMoviesCount(data.total_results);
            })
            .catch(err => {
                setError(err.message);
                toast(err.message);
            })
            .finally(() => {
                getMediaOnRequest('tv', query, 1, language)
                    .then(data => {
                        setTvShowsCount(data.total_results.toString());
                    })
                    .catch(err => {
                        setError(err.message);
                        toast(err.message);
                    })
                    .finally(() => {
                        getMediaOnRequest('person', query, 1, language)
                            .then(data => {
                                setPersonsCount(data.total_results);
                            })
                            .catch(err => {
                                setError(err.message);
                                toast(err.message);
                            })
                            .finally(() => {
                                getMediaOnRequest(
                                    'collection',
                                    query,
                                    1,
                                    language
                                )
                                    .then(data => {
                                        setCollectionsCount(data.total_results);
                                    })
                                    .catch(err => {
                                        setError(err.message);
                                        toast(err.message);
                                    })
                                    .finally(() => setIsLoading(false));
                            });
                    });
            });
    };

    return (
        <>
            {isLoading && <Loader />}
            <SearchPanel ref={formRef.searchPanelRef} aria-hidden={ariaHidden}>
                <Container>
                    <StyledForm onSubmit={handleSubmit}>
                        <Label
                            onAnimationEnd={() => setWarning(false)}
                            className={warning ? 'warning' : null}
                        >
                            <Input
                                value={query}
                                ref={formRef.inputRef}
                                onInput={hendleChange}
                            />
                            {placeholder}
                            <ClearButton
                                ref={formRef.clearRef}
                                type="button"
                                onClick={handleClick}
                            >
                                <Svg
                                    w={16}
                                    h={16}
                                    use={`${sprite}#icon-close`}
                                />
                            </ClearButton>
                        </Label>
                        <SubmitButton ref={formRef.submitRef} type="submit">
                            {t('search')}
                        </SubmitButton>
                    </StyledForm>
                    {total > 0 ? (
                        <List>
                            {moviesCount > 0 && (
                                <Item>
                                    <StyledLink
                                        to={`/movies/search?query=${query}&page=1`}
                                    >
                                        {t('searchResultIn')}
                                        <span>{t('movies')}</span>:{' '}
                                        {moviesCount}
                                    </StyledLink>
                                </Item>
                            )}
                            {tvShowsCount > 0 && (
                                <Item>
                                    <StyledLink
                                        to={`/tv-shows/search?query=${query}&page=1`}
                                    >
                                        {t('searchResultIn')}
                                        <span>{t('tvShows')}</span>:{' '}
                                        {tvShowsCount}
                                    </StyledLink>
                                </Item>
                            )}
                            {collectionsCount > 0 && (
                                <Item>
                                    <StyledLink
                                        to={`/movies/collections/search?query=${query}&page=1`}
                                    >
                                        {t('searchResultIn')}
                                        <span>{t('collections')}</span>:{' '}
                                        {collectionsCount}
                                    </StyledLink>
                                </Item>
                            )}
                            {personsCount > 0 && (
                                <Item>
                                    <StyledLink
                                        to={`/persons/search?query=${query}&page=1`}
                                    >
                                        {t('searchResultIn')}
                                        <span>{t('persons')}</span>:{' '}
                                        {personsCount}
                                    </StyledLink>
                                </Item>
                            )}
                        </List>
                    ) : (
                        moviesCount === 0 && <p>{t('nothingFound')}</p>
                    )}
                </Container>
                {error && <ToastContainer />}
            </SearchPanel>
        </>
    );
};
