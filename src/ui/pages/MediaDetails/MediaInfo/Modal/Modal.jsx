import { useEffect } from 'react';
import { ButtonClose, IFrame, IframeWrapper } from './Modal.styled';
import { createPortal } from 'react-dom';
import sprite from '../../../../assets/images/sprite.svg';
import { useModal } from '../../MediaDetails';
import { BackDrop } from 'ui/shared/layouts/BackDrop/BackDrop';
import { Svg } from 'ui/shared/components/Svg/Svg';

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
        <BackDrop onClick={onBackdropClick}>
            <IframeWrapper>
                <ButtonClose
                    type="button"
                    onClick={onBackdropClick}
                    aria-label="close"
                >
                    <Svg w={20} h={20} use={`${sprite}#icon-close`} />
                </ButtonClose>
                <IFrame
                    width={640}
                    src={`${isTrailer}?autoplay=1&iv_load_policy=3&modestbranding=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </IframeWrapper>
        </BackDrop>,
        document.getElementById('modal-root')
    );
};
