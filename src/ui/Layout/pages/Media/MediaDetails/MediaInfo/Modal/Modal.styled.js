import styled from '@emotion/styled';

export const IframeWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 95%;
    max-height: 95%;
    display: flex;
    align-items: center;
    padding-top: 24px;
    background-color: #000;
    transform: translate(-50%, -50%);
`;

export const ButtonClose = styled.button`
    position: absolute;
    top: 2px;
    right: 2px;
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.white};
    & svg {
        fill: currentColor;
    }
`;

export const IFrame = styled.iframe`
    border: none;
    aspect-ratio: 16 / 9;
`;
