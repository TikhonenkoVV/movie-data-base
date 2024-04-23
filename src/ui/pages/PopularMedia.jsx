import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLang } from 'common/store/selector';
import { getPopular } from 'common/services/api';
import { Container } from 'ui/shared/layouts/Container/Container';
import { MediaList } from 'ui/shared/components/MediaList/MediaList';
import { Loader } from 'ui/shared/components/Loader';
import { SectionTitle } from 'ui/shared/components/SectionTitle/SectionTitle';
import { useTranslate } from 'hooks/useTranslate';

export const PopularMedia = () => {
    const language = useSelector(selectLang);
    const { t } = useTranslate();

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
            getPopular('movie', language, 1)
                .then(data => setMovies(data.results))
                .catch(err => setError(err.message))
                .finally(() => setIsLoading(false));
        }
        if (isTv) {
            setIsLoading(true);
            getPopular('tv', language, 1)
                .then(data => setTv(data.results))
                .catch(err => setError(err.message))
                .finally(() => setIsLoading(false));
        }
    }, [isMovies, language, isTv]);

    return (
        <section>
            {isLoading && <Loader />}
            <Container>
                <SectionTitle>
                    {t('popular')} {isMovies ? t('movies_a') : t('tvShows')}
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
