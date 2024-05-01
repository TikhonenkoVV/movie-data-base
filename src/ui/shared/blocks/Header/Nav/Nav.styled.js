import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.nav`
    @media ${({ theme }) => theme.breakpoints.m} {
        display: flex;
        align-items: center;
        height: 100%;
        margin-right: auto;
    }
`;

export const NavLinkStyled = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 700;
    text-transform: capitalize;
    transition: background-color ${({ theme }) => theme.baseTransition},
        color ${({ theme }) => theme.baseTransition};

    &.active {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.hover};
        pointer-events: none;
    }
    @media ${({ theme }) => theme.breakpoints.m} {
        color: ${({ theme }) => theme.colors.light};
        &:hover {
            color: ${({ theme }) => theme.colors.white};
        }
        /* min-width: 95px; */
        width: auto;
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 10px;
        padding-right: 10px;
    }
`;
