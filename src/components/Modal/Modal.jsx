import { useEffect } from 'react';
import { IFrame, IframeWrapper, ModalBackdrop } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useModal } from 'pages/MovieDetails';

export const Modal = ({ onClose }) => {
    const { isTrailer } = useModal();

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
                <IFrame
                    src={`${isTrailer}?autoplay=1&iv_load_policy=3&modestbranding=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </IframeWrapper>
        </ModalBackdrop>,
        document.getElementById('modal-root')
    );
};
