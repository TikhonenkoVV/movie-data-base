import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DetailsTitle = styled.h2`
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    color: ${({ theme }) => theme.colors.themeText};
    &::first-letter {
        text-transform: uppercase;
    }
`;

export const LinksWrapper = styled.div`
    display: flex;
    gap: 24px;
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    height: 44px;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 20px;
    padding-right: 20px;
    text-transform: uppercase;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 700;
    border: 2px solid ${({ theme }) => theme.colors.btnColor};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.btnColor};
    transition: background-color ${({ theme }) => theme.baseTransition};
    &:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.accent};
    }
    @media ${({ theme }) => theme.breakpoints.xs} {
        font-size: ${({ theme }) => theme.fontSizes.preMedium};
    }
`;
