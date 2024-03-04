import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { CastList } from 'components/CastList/CastList';
import { Container } from 'components/Container/Container';
// import { CrewList } from 'components/CrewList/CrewList';
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Page404 } from 'components/Page404/Page404';
import { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails, getTrailer } from 'services/api';
import { findTrailer } from 'services/findTrailer';
import {
    normalizeCast,
    normalizeCrew,
    normalizeMovieData,
} from 'services/normalize';
import { CastSection, DetailsTitle, StyledLink } from './MovieDetails.styled';
import { FullCast } from 'components/FullCast/FullCast';

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

    const [cast, setCast] = useState();
    const [crew, setCrew] = useState();

    if (error) console.log(error);

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
                            .finally(() => setIsLoading(false));
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
            <section>
                {isLoading && <Loader />}
                <Container>
                    {movie && (
                        <>
                            <MovieInfo
                                movie={movie}
                                directing={crew?.director}
                                onClose={toggleModal}
                                trailer={isTrailer}
                            />
                        </>
                    )}
                    {error && <Page404 />}
                </Container>
            </section>
            <CastSection>
                <Container>
                    <DetailsTitle>Top Billed Cast</DetailsTitle>
                    <CastList cast={cast} />
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <StyledLink>Full Cast & Crew</StyledLink>
                        <StyledLink>Review</StyledLink>
                    </div>
                </Container>
            </CastSection>
            <FullCast cast={cast} crew={crew} />
        </ModalContext.Provider>
    );
};
