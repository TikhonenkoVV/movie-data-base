import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import {
    MovieInfoTitle,
    MovieInfoWrapper,
    MoviePoster,
    MovieWrapper,
    StyledSection,
} from './MediaLayout.styled';
import noPoster from '../../../../images/no-poster.jpg';
import { normalizeMovieData } from 'common/services/normalize/normalizeMovieData';
import { Loader } from 'ui/Layout/globalComponents/components/Loader';
import { Container } from 'ui/Layout/globalComponents/layouts/Container/Container';
import { getDetails } from 'common/services/api';
import { Page404 } from '../../globalLayouts/Search/Page404/Page404';
import { POSTER_W185 } from 'common/constants';

export const MediaLayout = () => {
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
            <Suspense>
                <Outlet />
            </Suspense>
            {error && <Page404 />}
        </>
    );
};
