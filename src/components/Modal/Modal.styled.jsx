import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 3;
`;

export const IframeWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    aspect-ratio: 16 / 9;
    transform: translate(-50%, -50%);
`;

export const IFrame = styled.iframe`
    border: none;
`;
