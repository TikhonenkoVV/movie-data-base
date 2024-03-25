import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledList = styled.ul`
    @media ${({ theme }) => theme.breakpoints.l} {
        display: flex;
        flex-wrap: wrap;
        gap: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        gap: ${({ theme }) => theme.spacing.retreatL};
    }
`;

export const StyledLi = styled.li`
    flex-basis: calc(50% - 12px);
    border-radius: 16px;
    overflow: hidden;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.mediumBackground};
    &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.spacing.retreatS};
        @media ${({ theme }) => theme.breakpoints.s} {
            margin-bottom: ${({ theme }) => theme.spacing.retreatM};
        }
        @media ${({ theme }) => theme.breakpoints.l} {
            margin-bottom: 0;
        }
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    gap: ${({ theme }) => theme.spacing.retreatS};
    align-items: center;
    text-align: left;
    @media ${({ theme }) => theme.breakpoints.s} {
        gap: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        gap: ${({ theme }) => theme.spacing.retreatL};
    }
`;

export const MoviePoster = styled.img`
    flex-shrink: 0;
    width: 90px;
    object-fit: cover;
    aspect-ratio: 2 / 3;
    @media ${({ theme }) => theme.breakpoints.xs} {
        width: 150px;
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
    font-size: ${({ theme }) => theme.fontSizes.l};
`;

export const ScoreBox = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
`;
