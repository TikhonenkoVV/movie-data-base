import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { CastList } from 'components/CastList/CastList';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails, getTrailer } from 'services/api';
import { findTrailer } from 'services/findTrailer';
import { DetailsTitle, LinksWrapper, StyledLink } from './MovieDetails.styled';
import { normalizeMovieData } from 'services/normalize/normalizeMovieData';
import { normalizeCast } from 'services/normalize/normalizeCast';
import { normalizeCrew } from 'services/normalize/normalizeCrew';

const ModalContext = createContext(false);

export const useModal = () => useContext(ModalContext);

export const MovieDetails = () => {
    const [isTrailer, setTrailer] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [movie, setMovie] = useState(null);
    const [first, setFirst] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { mediaId } = useParams();

    const [cast, setCast] = useState(null);
    const [crew, setCrew] = useState(null);
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        if (!first) return;
        const type = mediaId.split('-')[0];
        const id = mediaId.split('-')[1];
        setFirst(false);
        setIsLoading(true);
        getDetails(type, id, '')
            .then(data => {
                setMovie(normalizeMovieData(data));
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                getTrailer(type, id)
                    .then(data => {
                        setTrailer(findTrailer(data.results));
                    })
                    .catch(err => {
                        setError(err.message);
                    })
                    .finally(() => {
                        getDetails(
                            type,
                            id,
                            type === 'movie' ? '/credits' : '/aggregate_credits'
                        )
                            .then(data => {
                                setCast(normalizeCast(data.cast));
                                setCrew(normalizeCrew(data.crew));
                            })
                            .catch(err => {
                                setError(err.message);
                            })
                            .finally(() => {
                                getDetails(type, id, '/reviews')
                                    .then(data => {
                                        setReviews(data.results);
                                    })
                                    .catch(err => {
                                        setError(err.message);
                                    })
                                    .finally(() => {
                                        setIsLoading(false);
                                    });
                            });
                    });
            });
    }, [first, mediaId]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        if (!isModalOpen) disableBodyScroll(document.body);
        else enableBodyScroll(document.body);
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, isTrailer }}>
            {isLoading && <Loader />}
            {movie && (
                <MovieInfo
                    movie={movie}
                    directing={crew?.director}
                    onClose={toggleModal}
                    trailer={isTrailer}
                />
            )}
            {(cast?.length > 0 || crew || reviews?.length > 0) && (
                <section>
                    <Container>
                        {cast?.length > 0 && (
                            <>
                                <DetailsTitle>Top Billed Cast</DetailsTitle>
                                <CastList cast={cast} />
                            </>
                        )}
                        <LinksWrapper>
                            {(cast?.length > 0 || crew) && (
                                <StyledLink to={'details/cast-and-crew'}>
                                    Full Cast & Crew
                                </StyledLink>
                            )}
                            {reviews?.length > 0 && (
                                <StyledLink to={'details/reviews'}>
                                    Review
                                </StyledLink>
                            )}
                        </LinksWrapper>
                    </Container>
                </section>
            )}{' '}
            {/* ЗВЕРНИ УВАГУ!!! */}
            {error && <></>}
        </ModalContext.Provider>
    );
};
