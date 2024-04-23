import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledMedialist = styled.ul`
    @media ${({ theme }) => theme.breakpoints.xs} {
        grid-gap: ${({ theme }) => theme.spacing.retreatS};
        grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
        display: grid;
        grid-gap: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.s} {
        grid-gap: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.m} {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        grid-gap: ${({ theme }) => theme.spacing.retreatL};
    }
    @media ${({ theme }) => theme.breakpoints.xxl} {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`;

export const StyledMediaCard = styled.li`
    border: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.accent};

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    overflow: hidden;
    cursor: zoom-in;
    &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.spacing.retreatS};
        @media ${({ theme }) => theme.breakpoints.xs} {
            margin-bottom: 0;
        }
    }

    &:hover {
        box-shadow: 0px 2px 10px 2px ${({ theme }) => theme.colors.shadow};
    }
    &:hover img {
        transform: scale(1.05);
    }
`;

export const MovieLink = styled(Link)`
    display: flex;
    gap: 24px;
    position: relative;
    flex-grow: 1;
    @media ${({ theme }) => theme.breakpoints.xs} {
        display: block;
    }
`;

export const ImgWrapper = styled.div`
    flex-shrink: 0;
    width: 120px;
    & img {
        width: 100%;
    }
    @media ${({ theme }) => theme.breakpoints.xs} {
        width: 100%;
        overflow: hidden;
        aspect-ratio: 2/3;
        color: ${({ theme }) => theme.colors.white};
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }
    }
`;

export const ScoreBarBox = styled.div`
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
    @media ${({ theme }) => theme.breakpoints.xs} {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1;

        white-space: normal;
        width: auto;
        height: auto;
        overflow: auto;
        clip: auto;
        clip-path: none;
        margin: 0;
    }
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    @media ${({ theme }) => theme.breakpoints.xs} {
        text-align: center;
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
    }
`;

export const MovieTitle = styled.h2`
    margin-bottom: 6px;
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 1.5;
`;

export const Release = styled.p`
    margin-bottom: 24px;
    @media ${({ theme }) => theme.breakpoints.xs} {
        margin-bottom: 0;
    }
`;

export const Score = styled.p`
    &::first-letter {
        text-transform: uppercase;
    }
    @media ${({ theme }) => theme.breakpoints.xs} {
        display: none;
    }
`;
