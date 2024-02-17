import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { MediaList } from 'components/MediaList/MediaList';
import { Page404 } from 'components/Page404/Page404';
import { Pagination } from 'components/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getMoviesByName } from 'services/api';

export const Search = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const [first, setFirst] = useState(true);
    const [total, setTotal] = useState(0);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const { pathname } = useLocation();
    const path = pathname.split('/')[1];

    useEffect(() => {
        const query = searchParams.get('query');
        const page = searchParams.get('page');
        if (!query) return;
        setIsLoading(true);
        getMoviesByName(path === 'movies' ? 'movie' : 'tv', query, page)
            .then(data => {
                setMovies(data.results);
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
                {total > 0 && <Pagination totalPages={total} />}
                {movies && (
                    <MediaList
                        media={movies}
                        mediaTypes={path === 'movies' ? 'movie' : 'tv'}
                    />
                )}
                {!first && movies.length < 1 && <Page404 />}
                {total > 0 && <Pagination totalPages={total} />}
                {error && <ToastContainer />}
            </Container>
        </section>
    );
};
