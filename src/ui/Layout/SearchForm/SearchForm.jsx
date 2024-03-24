import { useEffect, useState } from 'react';
import { Container } from '../globalComponents/layouts/Container/Container';
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
import { Loader } from '../globalComponents/components/Loader';
import { getMediaOnRequest } from 'common/services/api';
import { Svg } from '../globalComponents/components/Svg/Svg';
import sprite from '../../images/sprite.svg';

export const SearchForm = ({ formRef, ariaHidden }) => {
    const [isLoading, setIsLoading] = useState(false);
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
    }, [ariaHidden, query]);

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
        if (!query) return;
        setIsLoading(true);
        getMediaOnRequest('movie', query, 1)
            .then(data => {
                setMoviesCount(data.total_results);
            })
            .catch(err => setError(err.message))
            .finally(() => {
                getMediaOnRequest('tv', query, 1)
                    .then(data => {
                        setTvShowsCount(data.total_results.toString());
                    })
                    .catch(err => setError(err.message))
                    .finally(() => {
                        getMediaOnRequest('person', query, 1)
                            .then(data => {
                                setPersonsCount(data.total_results);
                            })
                            .catch(err => setError(err.message))
                            .finally(() => {
                                getMediaOnRequest('collection', query, 1)
                                    .then(data => {
                                        setCollectionsCount(data.total_results);
                                    })
                                    .catch(err => setError(err.message))
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
                        <Label>
                            <Input
                                value={query}
                                ref={formRef.inputRef}
                                placeholder="Please enter your query"
                                onInput={hendleChange}
                            />
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
                            Search
                        </SubmitButton>
                    </StyledForm>
                    {total > 0 ? (
                        <List>
                            {moviesCount > 0 && (
                                <Item>
                                    <StyledLink
                                        to={`/movies/search?query=${query}&page=1`}
                                    >
                                        Found in category Movies: {moviesCount}
                                    </StyledLink>
                                </Item>
                            )}
                            {tvShowsCount > 0 && (
                                <Item>
                                    <StyledLink
                                        to={`/tv-shows/search?query=${query}&page=1`}
                                    >
                                        Found in category Tv-Shows:{' '}
                                        {tvShowsCount}
                                    </StyledLink>
                                </Item>
                            )}
                            {collectionsCount > 0 && (
                                <Item>
                                    <StyledLink
                                        to={`/movies/collections/search?query=${query}&page=1`}
                                    >
                                        Found in category Collections:{' '}
                                        {collectionsCount}
                                    </StyledLink>
                                </Item>
                            )}
                            {personsCount > 0 && (
                                <Item>
                                    <StyledLink
                                        to={`/persons/search?query=${query}&page=1`}
                                    >
                                        Found in category Persons:{' '}
                                        {personsCount}
                                    </StyledLink>
                                </Item>
                            )}
                        </List>
                    ) : (
                        moviesCount === 0 && (
                            <p>Nothing found at your request</p>
                        )
                    )}
                </Container>
            </SearchPanel>
        </>
    );
};
