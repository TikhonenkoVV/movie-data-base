import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { gethMovieTrailer } from 'services/api';
import { IFrame, IframeWrapper, ModalBackdrop } from './Modal.styled';
import { createPortal } from 'react-dom';
import { findTrailer } from 'services/findTrailer';
import { Page404 } from 'components/Page404/Page404';

export const Modal = ({ onClose }) => {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState([]);
    const [trailer, setTrailer] = useState([]);

    useEffect(() => {
        if (!movieId) return;
        setIsLoading(true);
        gethMovieTrailer(movieId)
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
    }, [movieId]);

    useEffect(() => {
        const onEscPress = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', onEscPress);
        return () => window.removeEventListener('keydown', onEscPress);
    }, [onClose]);

    const onBackdropClick = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <ModalBackdrop onClick={onBackdropClick}>
            <IframeWrapper>
                {isLoading && <Loader />}
                {trailer && (
                    <IFrame
                        width="100%"
                        height="100%"
                        src={trailer}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                )}
                {!trailer && <Page404 />}
            </IframeWrapper>
            {error && <ToastContainer />}
        </ModalBackdrop>,
        document.getElementById('modal-root')
    );
};
