import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
    position: relative;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #000000;
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
    gap: 10px;
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

export const TogglerBox = styled.div`
    position: absolute;
    bottom: 10px;
    right: 20px;
    display: flex;
    gap: 10px;
    @media ${({ theme }) => theme.breakpoints.m} {
        position: relative;
        bottom: auto;
        right: auto;
        width: 155px;
    }
`;

export const ThemeToggler = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 55px;
    height: 30px;
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.hover};
    transition: background-color ${({ theme }) => theme.baseTransition},
        color ${({ theme }) => theme.baseTransition};
    &::before {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.white};
        transition: background-color ${({ theme }) => theme.baseTransition},
            transform ${({ theme }) => theme.baseTransition};
    }
    &.light::before {
        transform: translateX(25px);
    }
    & svg {
        fill: currentColor;
    }
    @media ${({ theme }) => theme.breakpoints.m} {
        &::before {
            background-color: ${({ theme }) => theme.colors.light};
            color: ${({ theme }) => theme.colors.light};
        }
        &:hover {
            color: ${({ theme }) => theme.colors.white};
        }
        &:hover::before {
            background-color: ${({ theme }) => theme.colors.white};
        }
    }
`;

export const LoginButton = styled(Link)`
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.light};
    transition: color ${({ theme }) => theme.baseTransition};
    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
    &::first-letter {
        text-transform: uppercase;
    }
`;

export const BtnSearch = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 30px;
    height: 30px;
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
