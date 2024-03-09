import styled from '@emotion/styled';
import noPoster from '../../images/no-poster.jpg';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

export const MovieWrapper = styled.div`
    @media (min-width: 533px) {
        padding: 30px 0;
        display: flex;
        gap: 20px;
        background-image: ${({ theme }) => theme.lg.movieInfo},
            url(${({ bgr }) => (bgr ? IMAGES_BASE_URL + bgr : noPoster)});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        transition: background ${({ theme }) => theme.baseTransition};
    }
`;

export const PosterWrapper = styled.div`
    background-image: ${({ theme }) => theme.lg.movieInfo},
        url(${({ bgr }) => (bgr ? IMAGES_BASE_URL + bgr : noPoster)});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 250px;
    margin: 0 -20px 20px;
    padding: 20px;
    transition: background ${({ theme }) => theme.baseTransition};
    @media (min-width: 533px) {
        flex-shrink: 0;
        margin: 0;
        padding: 0;
        background: none;
        height: auto;
    }
`;

export const Poster = styled.img`
    object-fit: cover;
    aspect-ratio: 2 / 3;
    height: 210px;
    @media (min-width: 533px) {
        width: 230px;
        height: auto;
        margin-right: auto;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
        width: 300px;
    }
`;

export const MovieInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    color: ${({ theme }) => theme.colors.themeText};
    transition: color ${({ theme }) => theme.baseTransition};
    @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
        gap: 20px;
    }
`;

export const MovieInfoTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

export const ScoreBox = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const TrailerBtn = styled.button`
    display: flex;
    gap: 8px;
    align-items: center;
    height: 44px;
    padding: 0 30px;
    border-radius: 22px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.accent};
    transition: background-color ${({ theme }) => theme.baseTransition},
        color ${({ theme }) => theme.baseTransition};
    &:hover,
    &:focus {
        color: ${({ theme }) => theme.colors.white};
    }
    & svg {
        fill: currentColor;
    }
`;
