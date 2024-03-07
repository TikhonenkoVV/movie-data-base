import { Page404 } from 'components/Page404/Page404';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getDetails } from 'services/api';
import {
    MovieInfoTitle,
    MovieInfoWrapper,
    MoviePoster,
    MovieWrapper,
    StyledSection,
} from './MediaDetails.styled';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { normalizeMovieData } from 'services/normalize/normalizeMovieData';
import noPoster from '../../images/no-poster.jpg';

export const MediaDetails = () => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200';
    const IMAGES_BASE_URL_RETINA = 'https://image.tmdb.org/t/p/w400';

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
                <StyledSection>
                    <Container>
                        <MovieWrapper>
                            <picture>
                                <source
                                    srcSet={
                                        movie.poster_path
                                            ? `${
                                                  IMAGES_BASE_URL +
                                                  movie.poster_path
                                              } 1x, ${
                                                  IMAGES_BASE_URL_RETINA +
                                                  movie.poster_path
                                              } 2x`
                                            : noPoster
                                    }
                                />

                                <MoviePoster
                                    src={
                                        movie.poster_path
                                            ? IMAGES_BASE_URL +
                                              movie.poster_path
                                            : noPoster
                                    }
                                    alt={movie.name}
                                />
                            </picture>
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
            <Suspense>
                <Outlet />
            </Suspense>
            {error && <Page404 />}
        </>
    );
};
