import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

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

export const CardOverlay = styled.div`
    position: relative;
    flex-grow: 1;
    width: 100%;
    min-height: 80px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 80px;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
`;

export const MovieTitle = styled.h2`
    margin-bottom: 6px;
    text-align: left;
    line-height: 1.5;
    font-size: ${({ theme }) => theme.fontSizes.small};
`;
