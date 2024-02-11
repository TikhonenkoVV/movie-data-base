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
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { mediaTypes, mediaId } = useParams();

    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        getDetails(mediaTypes, mediaId, '')
            .then(data => {
                setMovie(data);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                getTrailer(mediaTypes, mediaId)
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
    }, [mediaTypes, mediaId]);

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
                                state={{ from: location }}
                                onTogle={toggleModal}
                                trailer={isTrailer}
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
