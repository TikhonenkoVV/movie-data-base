import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getMediaOnRequest } from 'common/services/api';
import { Pagination } from './Pagination/Pagination';
import { Container } from 'ui/Layout/globalComponents/layouts/Container/Container';
import { Loader } from 'ui/Layout/globalComponents/components/Loader';
import { MediaList } from '../../../globalComponents/components/MediaList/MediaList';
import { Page404 } from './Page404/Page404';
import { PersonsList } from '../../Media/PersonDetails/PersonsList/PersonsList';

export const Search = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const [first, setFirst] = useState(true);
    const [total, setTotal] = useState(0);
    const [medias, setMedias] = useState([]);
    const [error, setError] = useState(null);
    const { pathname } = useLocation();
    const path = pathname.split('/')[1];
    const isCollections = pathname.split('/')[2] === 'collections';

    useEffect(() => {
        const query = searchParams.get('query');
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
            page
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
    }, [searchParams, path, isCollections]);

    return (
        <section className="padding-top">
            <Container>
                {isLoading && <Loader />}
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
                {error && <ToastContainer />}
            </Container>
        </section>
    );
};
