import { useLocation } from 'react-router-dom';
import { SectionTitle } from './PopularMedia.styled';
import { useEffect, useState } from 'react';
import { getPopular } from 'common/services/api';
import { Container } from 'ui/shared/layouts/Container/Container';
import { MediaList } from 'ui/shared/components/MediaList/MediaList';
import { Loader } from 'ui/shared/components/Loader';

export const PopularMedia = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [tv, setTv] = useState([]);
    const [error, setError] = useState(null);
    const { pathname } = useLocation();
    const path = pathname.split('/')[1];
    const isMovies = path === 'movies';
    const isTv = path === 'tv-shows';

    useEffect(() => {
        if (isMovies) {
            setIsLoading(true);
            getPopular('movie', 1)
                .then(data => setMovies(data.results))
                .catch(err => setError(err.message))
                .finally(() => setIsLoading(false));
        }
        if (isTv) {
            setIsLoading(true);
            getPopular('tv', 1)
                .then(data => setTv(data.results))
                .catch(err => setError(err.message))
                .finally(() => setIsLoading(false));
        }
    }, [isMovies, isTv]);
    return (
        <section className="padding-top">
            {isLoading && <Loader />}
            <Container>
                <SectionTitle>
                    Top 20 Popular {isMovies ? 'Movies' : 'TV Shows'}
                </SectionTitle>
                <MediaList
                    media={isMovies ? movies : tv}
                    mediaTypes={isMovies ? 'movie' : 'tv'}
                />
            </Container>
            {error && <p>{error}</p>}
        </section>
    );
};
