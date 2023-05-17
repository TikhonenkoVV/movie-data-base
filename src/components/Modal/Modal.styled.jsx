import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
    box-sizing: content-box;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 3;
`;

export const IframeWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 90%;
`;

export const IFrame = styled.iframe`
    border: none;
    width: 100%;
    aspect-ratio: 16 / 9;
`;
