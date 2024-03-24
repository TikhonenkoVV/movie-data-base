import { useLocation } from 'react-router-dom';
import { Container } from 'ui/Layout/globalComponents/layouts/Container/Container';
import { SectionTitle } from './PopularMedia.styled';
import { useEffect, useState } from 'react';
import { getPopular } from 'common/services/api';
import { Loader } from 'ui/Layout/globalComponents/components/Loader';
import { MediaList } from 'ui/Layout/globalComponents/components/MediaList/MediaList';

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
        console.log(isMovies);
        console.log(isTv);
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
