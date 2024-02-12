import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Container } from 'components/App.styled';
import { DetailList } from 'components/DetailList/DetailList';
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
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getDetails, getTrailer } from 'services/api';
import { findTrailer } from 'services/findTrailer';
import { normalizeMovieData } from 'services/normalize';

const ModalContext = createContext(false);

export const useModal = () => useContext(ModalContext);

const MovieDetails = () => {
    const [isTrailer, setTrailer] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [movie, setMovie] = useState(null);
    const [first, setFirst] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { mediaId } = useParams();
    const { state } = useLocation();

    useEffect(() => {
        if (!first) return;
        setFirst(false);
        setIsLoading(true);
        getDetails(state.mediaTypes, mediaId, '')
            .then(data => {
                setMovie(data);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                getTrailer(state.mediaTypes, mediaId)
                    .then(data => {
                        setTrailer(findTrailer(data.results));
                    })
                    .catch(err => {
                        setError(err.message);
                        toast(err.message);
                    })
                    .finally(() => {
                        setIsLoading(false);
                    });
            });
    }, [first, state, mediaId]);

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
                                {...normalizeMovieData(movie)}
                                onClose={toggleModal}
                            />
                            <DetailList
                                onTogle={toggleModal}
                                trailer={isTrailer}
                                mediaTypes={state.mediaTypes}
                            />
                            <Suspense>
                                <Outlet />
                            </Suspense>
                        </>
                    )}
                    {error && <Page404 />}
                </Container>
            </section>
        </ModalContext.Provider>
    );
};

export default MovieDetails;
