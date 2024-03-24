import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import iconSun from '../../images/icon-sun.svg';
import iconMoon from '../../images/icon-moon.svg';

export const HeaderStyled = styled.header`
    position: relative;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: background-color ${({ theme }) => theme.baseTransition};
`;

export const SearchPanel = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
    padding: 5px 0;
    box-shadow: 0px 6px 20px 0px #00000075;
    z-index: 1;
    &[aria-hidden='true'] {
        display: none;
    }
`;

export const SearcForm = styled.form`
    display: flex;
    gap: 16px;
`;

export const SubmitButton = styled.button`
    padding: 0 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding-left: 10px;
    padding-right: 50px;
    background-color: transparent;
    outline: none;
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.light};
    transition: color ${({ theme }) => theme.baseTransition};
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    gap: 20px;
    align-items: center;
    height: 40px;
    @media ${({ theme }) => theme.breakpoints.m} {
        position: static;
    }
`;

export const Menu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    transform: ${({ isOpen }) =>
        isOpen ? 'translateX(0)' : 'translateX(300px)'};
    background-color: ${({ theme }) => theme.colors.accent};
    transition: background-color ${({ theme }) => theme.baseTransition},
        transform ${({ theme }) => theme.baseTransition};
    z-index: 4;
    @media ${({ theme }) => theme.breakpoints.m} {
        position: static;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        transform: translateX(0);
        z-index: auto;
    }
`;

export const OpenMenuBtn = styled.button`
    display: block;
    width: 40px;
    height: 40px;
    padding: 4px;
    color: ${({ theme }) => theme.colors.white};
    & svg {
        fill: currentColor;
    }
    @media ${({ theme }) => theme.breakpoints.m} {
        display: none;
    }
`;

export const CloseMenuBtn = styled.button`
    display: block;
    width: 40px;
    height: 40px;
    padding: 4px;
    margin-left: auto;
    color: ${({ theme }) => theme.colors.white};
    & svg {
        fill: currentColor;
    }
    @media ${({ theme }) => theme.breakpoints.m} {
        display: none;
    }
`;

export const Nav = styled.nav`
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
    text-transform: uppercase;
    transition: background-color ${({ theme }) => theme.baseTransition},
        color ${({ theme }) => theme.baseTransition};

    &.active {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.hover};
        pointer-events: none;
    }
    @media ${({ theme }) => theme.breakpoints.m} {
        color: ${({ theme }) => theme.colors.light};
        &:hover,
        &:focus {
            color: ${({ theme }) => theme.colors.white};
        }
        width: 100px;
        padding-top: 0;
        padding-bottom: 0;
    }
`;

export const Toggler = styled.button`
    position: absolute;
    bottom: 10px;
    right: 20px;
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
        background-color: ${({ theme }) => theme.colors.white};
        transition: background-color ${({ theme }) => theme.baseTransition},
            transform ${({ theme }) => theme.baseTransition};
    }
    &.light::before {
        transform: translateX(40px);
    }
    @media ${({ theme }) => theme.breakpoints.m} {
        position: relative;
        bottom: auto;
        right: auto;
        &::before {
            background-color: ${({ theme }) => theme.colors.light};
        }
        &:hover::before {
            background-color: ${({ theme }) => theme.colors.white};
        }
    }
`;

export const BtnSearch = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    margin-left: auto;
    color: ${({ theme }) => theme.colors.light};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.hover};
    transition: color ${({ theme }) => theme.baseTransition};
    & svg {
        fill: currentColor;
        pointer-events: none;
    }
    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
    @media ${({ theme }) => theme.breakpoints.m} {
        margin-left: 0;
    }
`;
