import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { CastList } from 'components/CastList/CastList';
import { Container } from 'components/Container/Container';
// import { CrewList } from 'components/CrewList/CrewList';
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Page404 } from 'components/Page404/Page404';
import {
    Suspense,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getDetails, getTrailer } from 'services/api';
import { findTrailer } from 'services/findTrailer';
import {
    normalizeCast,
    normalizeCrew,
    normalizeMovieData,
} from 'services/normalize';
import {
    CastSection,
    DetailsTitle,
    LinksWrapper,
    StyledLink,
} from './MovieDetails.styled';

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
            {isLoading && <Loader />}
            {movie && (
                <MovieInfo
                    movie={movie}
                    directing={crew?.director}
                    onClose={toggleModal}
                    trailer={isTrailer}
                />
            )}
            <CastSection>
                <Container>
                    {cast?.length > 0 && (
                        <>
                            <DetailsTitle>Top Billed Cast</DetailsTitle>
                            <CastList cast={cast} />
                        </>
                    )}
                    <LinksWrapper>
                        {(cast?.length > 0 || crew?.length > 0) && (
                            <StyledLink to={'cast-and-crew'}>
                                Full Cast & Crew
                            </StyledLink>
                        )}
                        <StyledLink>Review</StyledLink>
                    </LinksWrapper>
                </Container>
            </CastSection>
            <Suspense>
                <Outlet />
            </Suspense>
            {error && <Page404 />}
        </ModalContext.Provider>
    );
};
