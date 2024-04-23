import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CreditsWrapper = styled.div`
    @media ${({ theme }) => theme.breakpoints.m} {
        display: flex;
        gap: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        gap: ${({ theme }) => theme.spacing.retreatL};
    }
`;

export const CastCrewWrapper = styled.div`
    flex-basis: calc((100% - 24px) / 2);
    color: ${({ theme }) => theme.colors.themeText};
    border: 1px solid #808080;
    padding: 16px;
    &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.spacing.retreatS};
        @media ${({ theme }) => theme.breakpoints.s} {
            margin-bottom: ${({ theme }) => theme.spacing.retreatM};
        }
        @media ${({ theme }) => theme.breakpoints.m} {
            margin-bottom: 0;
        }
    }
`;

export const MinorTitle = styled.h2`
    margin-bottom: 16px;
    &::first-letter {
        text-transform: uppercase;
    }
`;

export const CardListItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const MajorTitle = styled.h3`
    margin-bottom: 16px;
    &::first-letter {
        text-transform: uppercase;
    }
`;

export const Card = styled.li`
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    gap: 16px;
`;

export const Poster = styled.img`
    width: 66px;
    aspect-ratio: 2/3;
    border-radius: 5px;
`;
