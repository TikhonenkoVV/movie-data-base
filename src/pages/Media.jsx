import { Container } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';
import { MediaList } from 'components/MediaList/MediaList';
import { Page404 } from 'components/Page404/Page404';
import { Pagination } from 'components/Pagination/Pagination';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Select } from 'components/Select/Select';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getMoviesByName } from 'services/api';

const Media = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [first, setFirst] = useState(true);
    const [total, setTotal] = useState(0);
    const [movies, setMovies] = useState([]);
    const [mediaTypes, setMediaTypes] = useState('movie');
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    let page = 1;

    const selectInitial = {
        options: [{ movie: 'Movie' }, { tv: 'Tv' }],
    };

    useEffect(() => {
        const query = searchParams.get('query');
        const page = searchParams.get('page');
        if (!query) return;
        setIsLoading(true);
        getMoviesByName(mediaTypes, query, page)
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
    }, [mediaTypes, searchParams]);

    const onSubmit = query => {
        setSearchParams({ query, page });
    };

    const hendleSelectChange = e => {
        setMediaTypes(e);
    };

    return (
        <section>
            <Container>
                {isLoading && <Loader />}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '24px',
                        marginBottom: '24px',
                    }}
                >
                    <SearchForm
                        onSubmit={onSubmit}
                        onChange={hendleSelectChange}
                    />
                    <Select
                        initial={selectInitial}
                        onChange={hendleSelectChange}
                    />
                </div>
                {total > 0 && <Pagination totalPages={total} />}
                {movies && (
                    <MediaList movies={movies} mediaTypes={mediaTypes} />
                )}
                {!first && movies.length < 1 && <Page404 />}
                {total > 0 && <Pagination totalPages={total} />}
                {error && <ToastContainer />}
            </Container>
        </section>
    );
};

export default Media;
