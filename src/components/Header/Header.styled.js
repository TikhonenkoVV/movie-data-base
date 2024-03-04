import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import iconSun from '../../images/icon-sun.svg';
import iconMoon from '../../images/icon-moon.svg';

export const HeaderStyled = styled.header`
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: background-color ${({ theme }) => theme.baseTransition};
    @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
        padding-top: 20px;
        padding-bottom: 20px;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    gap: 20px;
    align-items: center;
    height: 40px;
    @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
        position: static;
        height: 70px;
    }
`;

export const Menu = styled.div`
    position: fixed;
    height: 100vh;
    top: 0;
    right: 0;
    width: 300px;
    background-color: ${({ theme }) => theme.colors.accent};
    z-index: 1;
    @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
        position: static;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
    }
`;

export const Nav = styled.nav`
    @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
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
    width: 100px;
    height: 100%;
    color: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 700;
    text-transform: uppercase;
    transition: background-color ${({ theme }) => theme.baseTransition},
        color ${({ theme }) => theme.baseTransition};
    &:hover,
    &:focus {
        color: ${({ theme }) => theme.colors.white};
    }

    &.active {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.hover};
        pointer-events: none;
    }
`;

export const Toggler = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.hover};
    background-image: url('${iconSun}'), url('${iconMoon}');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: top 10px left 10px, top 10px right 10px;
    transition: background-color ${({ theme }) => theme.baseTransition};
    &::before {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.light};
        transition: background-color ${({ theme }) => theme.baseTransition},
            transform ${({ theme }) => theme.baseTransition};
    }
    &:hover::before {
        background-color: ${({ theme }) => theme.colors.white};
    }
    &.light::before {
        transform: translateX(40px);
    }
`;
