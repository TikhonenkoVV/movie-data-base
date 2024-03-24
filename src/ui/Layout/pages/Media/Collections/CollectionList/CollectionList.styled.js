import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.retreatS};
    @media ${({ theme }) => theme.breakpoints.s} {
        gap: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        gap: ${({ theme }) => theme.spacing.retreatL};
    }
`;

export const StyledLi = styled.li`
    flex-basis: calc(50% - 12px);
    border-radius: 16px;
    border: 1px solid #808080;
    overflow: hidden;
    box-shadow: 0px 0px 15px 2px #00000050;
`;

export const StyledLink = styled(Link)`
    text-align: center;
    @media ${({ theme }) => theme.breakpoints.xs} {
        display: flex;
        gap: 20px;
        text-align: left;
    }
`;

export const MoviePoster = styled.img`
    flex-shrink: 0;
    width: 150px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
    object-fit: cover;
    aspect-ratio: 2 / 3;
    @media ${({ theme }) => theme.breakpoints.xs} {
        width: auto;
        margin-bottom: 0;
        margin-left: 0;
        margin-right: 0;
    }
`;

export const MovieInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    color: ${({ theme }) => theme.colors.themeText};
    transition: color ${({ theme }) => theme.baseTransition};
    @media ${({ theme }) => theme.breakpoints.m} {
        gap: 20px;
    }
`;

export const MovieInfoTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const ScoreBox = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`;
