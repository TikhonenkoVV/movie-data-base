import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import logoM from '../../images/logo-m.svg';

export const HeaderStyled = styled.header`
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: ${props => props.theme.colors.accent};
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
`;

export const Logotype = styled(Link)`
    display: flex;
    width: 60px;
    /* height: 70px; */
    aspect-ratio: 2 / 1;
    background-image: url(${logoM});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
        background-image: url(${logo});
        width: 90px;
        aspect-ratio: 1.2857 / 1;
        /* width: ${props => props.theme.breakpoints.m}; */
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 100%;
    color: ${props => props.theme.colors.light};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 700;
    text-transform: uppercase;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
        color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.white};
    }

    &.active {
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.hover};
        pointer-events: none;
    }
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
        width: 100px;
        font-size: ${props => props.theme.fontSizes.medium};
    }
`;
