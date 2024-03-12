import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DetailsTitle = styled.h2`
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    color: ${({ theme }) => theme.colors.themeText};
`;

export const LinksWrapper = styled.div`
    display: flex;
    gap: 24px;
`;

export const StyledLink = styled(Link)`
    display: block;
    padding: 10px 20px;
    text-transform: uppercase;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 700;

    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.accent};
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: ${({ theme }) => theme.colors.white};
    }
    @media ${({ theme }) => theme.breakpoints.xs} {
        font-size: ${({ theme }) => theme.fontSizes.preMedium};
    }
`;
