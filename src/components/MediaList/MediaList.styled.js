import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledMedialist = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: ${({ theme }) => theme.spacing.step * 5}px;
    @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const StyledMediaCard = styled.li`
    display: flex;
    flex-direction: column;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.accent};

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    overflow: hidden;
    cursor: zoom-in;

    &:hover,
    &:focus {
        box-shadow: 0px 2px 10px 2px ${({ theme }) => theme.colors.shadow};
    }
    &:hover img,
    &:focus img {
        transform: scale(1.05);
    }
`;

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

export const CardInfo = styled.div`
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
