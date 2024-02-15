import styled from '@emotion/styled';

export const ImgWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    aspect-ratio: 2/3;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
`;

export const CardInfo = styled.div`
    position: relative;
    flex-grow: 1;
    width: 100%;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
`;

export const PersonTitle = styled.h2`
    text-align: center;
    line-height: 1.5;
    font-size: ${({ theme }) => theme.fontSizes.small};
`;
