import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMediaOnRequest } from 'common/services/api';
import { Pagination } from './Pagination/Pagination';
import { Description } from './Search.styled';
import { Container } from 'ui/shared/layouts/Container/Container';
import { Loader } from 'ui/shared/components/Loader';
import { MediaList } from 'ui/shared/components/MediaList/MediaList';
import { PersonsList } from '../PersonDetails/PersonsList/PersonsList';
import { Page404 } from '../Page404/Page404';
import { useSelector } from 'react-redux';
import { selectLang } from 'common/store/selector';
import { useTranslate } from 'hooks/useTranslate';
import { toast, ToastContainer } from 'react-toastify';

const Search = () => {
    const language = useSelector(selectLang);
    const { t } = useTranslate();

    const [isLoading, setIsLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const [first, setFirst] = useState(true);
    const [total, setTotal] = useState(0);
    const [medias, setMedias] = useState([]);
    const [error, setError] = useState(null);
    const { pathname } = useLocation();
    const path = pathname.split('/')[1];
    const isCollections = pathname.split('/')[2] === 'collections';
    const query = searchParams.get('query');

    useEffect(() => {
        const page = searchParams.get('page');
        if (!query) return;
        setIsLoading(true);
        getMediaOnRequest(
            isCollections
                ? 'collection'
                : path === 'movies'
                ? 'movie'
                : path === 'tv-shows'
                ? 'tv'
                : 'person',
            query,
            page,
            language
        )
            .then(data => {
                setMedias(data.results);
                setTotal(data.total_pages);
            })
            .catch(err => {
                setError(err.message);
                toast(err.message);
            })
            .finally(() => {
                setIsLoading(false);
                setFirst(false);
            });
    }, [query, searchParams, path, isCollections, language]);

    return (
        <section>
            <Container>
                {error && <p>{error}</p>}
                {isLoading && <Loader />}
                <Description>
                    {t('searchResultFor')}"{query}"
                </Description>
                {total > 0 && (
                    <Pagination totalPages={total} serviceClass="top" />
                )}
                {medias && path !== 'persons' && (
                    <MediaList
                        media={medias}
                        mediaTypes={
                            isCollections
                                ? 'collections'
                                : path === 'movies'
                                ? 'movie'
                                : 'tv'
                        }
                    />
                )}
                {medias && path === 'persons' && (
                    <PersonsList persons={medias} />
                )}
                {!first && medias.length < 1 && <Page404 />}
                {total > 0 && (
                    <Pagination totalPages={total} serviceClass="bottom" />
                )}
            </Container>
            {error && <ToastContainer />}
        </section>
    );
};

export default Search;
