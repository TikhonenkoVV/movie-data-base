import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
    z-index: 2;
    &[aria-hidden='true'] {
        display: none;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    gap: 16px;
`;

export const Label = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    padding-left: 12px;
    color: #b4b4b4;
    &.warning {
        animation-name: warning;
        animation-duration: 1s;
        animation-fill-mode: forwards;

        @keyframes warning {
            0% {
                color: #b4b4b4;
            }
            15% {
                color: #ff0000;
            }
            35% {
                color: #b4b4b4;
            }
            50% {
                color: #ff0000;
            }
            65% {
                color: #b4b4b4;
            }
            85% {
                color: #ff0000;
            }
            100% {
                color: #b4b4b4;
            }
        }
    }
`;

export const Input = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
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

export const ClearButton = styled.button`
    position: absolute;
    top: 7px;
    right: 0;
    width: 16px;
    height: 16px;
    & svg {
        pointer-events: none;
    }
`;

export const SubmitButton = styled.button`
    padding: 0 16px;
    text-transform: capitalize;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.white};
`;

export const List = styled.ul`
    padding: 10px 0;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    height: 30px;
    &:hover {
        background-color: #ededed;
    }
`;

export const StyledLink = styled(Link)`
    padding-left: 10px;
    & span {
        text-transform: capitalize;
    }
`;
