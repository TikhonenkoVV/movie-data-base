import { Container } from 'components/Container/Container';
import {
    Card,
    CastCrewWrapper,
    StyledLink,
    StyledSection,
    MinorTitle,
    MajorTitle,
    CardListItem,
    Poster,
    MovieWrapper,
    MoviePoster,
    MovieInfoWrapper,
    MovieInfoTitle,
} from './FullCast.styled';
import { useEffect, useState } from 'react';
import { getDetails } from 'services/api';
import { useParams } from 'react-router-dom';
import {
    normalizeCast,
    normalizeCrew,
    normalizeMovieData,
} from 'services/normalize';
import { Loader } from 'components/Loader/Loader';
import { Page404 } from 'components/Page404/Page404';

export const FullCast = () => {
    const { mediaId } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [castArray, setCastArray] = useState();
    const [crewArray, setCrewArray] = useState();
    const [movie, setMovie] = useState(null);

    if (movie) console.log(movie.release);

    useEffect(() => {
        setIsLoading(true);
        const type = mediaId.split('-')[0];
        const id = mediaId.split('-')[1];
        getDetails(
            type,
            id,
            type === 'movie' ? '/credits' : '/aggregate_credits'
        )
            .then(data => {
                setCastArray(normalizeCast(data.cast));
                setCrewArray(normalizeCrew(data.crew));
            })
            .catch(err => setError(err.message))
            .finally(() => {
                getDetails(type, id, '')
                    .then(data => setMovie(normalizeMovieData(data)))
                    .catch(err => {
                        setError(err.message);
                    })
                    .finally(() => setIsLoading(false));
            });
    }, [mediaId]);

    return (
        <>
            {movie && (
                <StyledSection className="head-section">
                    <Container>
                        <MovieWrapper>
                            <MoviePoster
                                src={movie.poster_path}
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
            <StyledSection>
                {isLoading && <Loader />}
                <Container style={{ display: 'flex', gap: '24px' }}>
                    <CastCrewWrapper>
                        <MinorTitle>Cast</MinorTitle>
                        <ul>
                            {castArray?.map(
                                ({
                                    id,
                                    castId,
                                    personName,
                                    smallPoster,
                                    role,
                                }) => (
                                    <Card key={castId}>
                                        <StyledLink to={`/person/${id}`}>
                                            <Poster
                                                src={smallPoster}
                                                alt={personName}
                                            />
                                            <div>
                                                <h3>{personName}</h3>
                                                <p>{role}</p>
                                            </div>
                                        </StyledLink>
                                    </Card>
                                )
                            )}
                        </ul>
                    </CastCrewWrapper>
                    <CastCrewWrapper>
                        <MinorTitle>Crew</MinorTitle>
                        <ul>
                            {crewArray?.crew?.map(el => (
                                <CardListItem key={Object.keys(el)[0]}>
                                    <MajorTitle
                                        style={{ textTransform: 'capitalize' }}
                                    >
                                        {Object.keys(el)[0]}
                                    </MajorTitle>
                                    <ul>
                                        {el[Object.keys(el)[0]]?.map(
                                            ({
                                                id,
                                                credit_id,
                                                job,
                                                personName,
                                                poster,
                                            }) => (
                                                <Card key={credit_id}>
                                                    <StyledLink
                                                        to={`/person/${id}`}
                                                    >
                                                        <Poster
                                                            src={poster}
                                                            alt={personName}
                                                        />
                                                        <div>
                                                            <h3>
                                                                {personName}
                                                            </h3>
                                                            <p>{job}</p>
                                                        </div>
                                                    </StyledLink>
                                                </Card>
                                            )
                                        )}
                                    </ul>
                                </CardListItem>
                            ))}
                        </ul>
                    </CastCrewWrapper>
                </Container>
                {error && <Page404 />}
            </StyledSection>
        </>
    );
};
