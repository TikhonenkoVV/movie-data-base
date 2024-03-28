import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import {
    MovieInfoTitle,
    MovieInfoWrapper,
    MoviePoster,
    MovieWrapper,
    StyledSection,
} from './DetailsLayout.styled';
import noPoster from '../../../assets/images/no-poster.jpg';
import { normalizeMovieData } from 'common/services/normalize/normalizeMovieData';
import { getDetails } from 'common/services/api';
import { POSTER_W185 } from 'common/constants';
import { Page404 } from 'ui/pages/Page404/Page404';
import { Container } from '../Container/Container';
import { Loader } from 'ui/shared/components/Loader';

export const DetailsLayout = () => {
    const { mediaId } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const type = mediaId.split('-')[0];
        const id = mediaId.split('-')[1];
        getDetails(type, id, '')
            .then(data => setMovie(normalizeMovieData(data)))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false));
    }, [mediaId]);

    return (
        <>
            {isLoading && <Loader />}
            {movie && (
                <StyledSection className="padding-top">
                    <Container>
                        <MovieWrapper>
                            <MoviePoster
                                src={
                                    movie.poster_path
                                        ? POSTER_W185 + movie.poster_path
                                        : noPoster
                                }
                                alt={movie.name}
                            />
                            <MovieInfoWrapper>
                                <MovieInfoTitle>{movie.name}</MovieInfoTitle>
                                {movie.release.release_date && (
                                    <p>
                                        {movie.release.title}
                                        {movie.release.release_date}
                                    </p>
                                )}
                                {movie.first_air.first_air_date && (
                                    <p>
                                        {movie.first_air.title}
                                        {movie.first_air.first_air_date}
                                    </p>
                                )}
                            </MovieInfoWrapper>
                        </MovieWrapper>
                    </Container>
                </StyledSection>
            )}
            <section className="padding-top">
                <Container>
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </Container>
            </section>
            {error && <Page404 />}
        </>
    );
};
