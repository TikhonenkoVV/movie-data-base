import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
    @media ${({ theme }) => theme.breakpoints.l} {
        display: flex;
        flex-wrap: wrap;
        gap: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        gap: ${({ theme }) => theme.spacing.retreatL};
    }
`;

export const Item = styled.li`
    text-align: center;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.mediumBackground};
    color: ${({ theme }) => theme.colors.themeText};
    transition: background-color ${({ theme }) => theme.baseTransition},
        color ${({ theme }) => theme.baseTransition};
    &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.spacing.retreatS};
        @media ${({ theme }) => theme.breakpoints.s} {
            margin-bottom: ${({ theme }) => theme.spacing.retreatM};
        }
        @media ${({ theme }) => theme.breakpoints.l} {
            margin-bottom: 0;
        }
    }
    @media ${({ theme }) => theme.breakpoints.xs} {
        text-align: left;
    }
    @media ${({ theme }) => theme.breakpoints.l} {
        flex-basis: calc((100% - ${({ theme }) => theme.spacing.retreatM}) / 2);
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        flex-basis: calc((100% - ${({ theme }) => theme.spacing.retreatL}) / 2);
    }
`;

export const StyledLink = styled(Link)`
    padding: ${({ theme }) => theme.spacing.retreatS};
    @media ${({ theme }) => theme.breakpoints.xs} {
        display: flex;
        gap: ${({ theme }) => theme.spacing.retreatS};
        align-items: center;
    }
    @media ${({ theme }) => theme.breakpoints.s} {
        gap: ${({ theme }) => theme.spacing.retreatM};
        padding: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        gap: ${({ theme }) => theme.spacing.retreatL};
        padding: ${({ theme }) => theme.spacing.retreatL};
    }
`;

export const PersonPhoto = styled.img`
    flex-shrink: 0;
    width: 100px;
    aspect-ratio: 1/1;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    object-fit: cover;
    border-radius: 8px;
    @media ${({ theme }) => theme.breakpoints.xs} {
        width: 120px;
        aspect-ratio: 2/3;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0;
    }
`;

export const PersonName = styled.h2`
    margin-bottom: 10px;
`;

export const InfoItem = styled.div`
    &:not(:last-child) {
        margin-bottom: 12px;
    }
`;

export const ItemTitle = styled.h3`
    &:not(:last-child) {
        margin-bottom: 8px;
    }
    &::first-letter {
        text-transform: uppercase;
    }
`;

export const Description = styled.p`
    margin-bottom: 4px;
`;
