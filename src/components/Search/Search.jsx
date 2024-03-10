import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader';
import { MediaList } from 'components/MediaList/MediaList';
import { Page404 } from 'components/Page404/Page404';
import { Pagination } from 'components/Pagination/Pagination';
import { PersonsList } from 'components/PersonsList/PersonsList';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getMediaByName } from 'services/api';

export const Search = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const [first, setFirst] = useState(true);
    const [total, setTotal] = useState(0);
    const [medias, setMedias] = useState([]);
    const [error, setError] = useState(null);
    const { pathname } = useLocation();
    const path = pathname.split('/')[1];

    useEffect(() => {
        const query = searchParams.get('query');
        const page = searchParams.get('page');
        if (!query) return;
        setIsLoading(true);
        getMediaByName(
            path === 'movies' ? 'movie' : path === 'tv-shows' ? 'tv' : 'person',
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
    }, [searchParams, path]);

    return (
        <section>
            <Container>
                {isLoading && <Loader />}
                {total > 0 && (
                    <Pagination totalPages={total} serviceClass="top" />
                )}
                {medias && path !== 'person' && (
                    <MediaList
                        media={medias}
                        mediaTypes={path === 'movies' ? 'movie' : 'tv'}
                    />
                )}
                {medias && path === 'person' && (
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
