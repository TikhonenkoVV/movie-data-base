import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import logoM from '../../images/logo-m.svg';

export const Logotype = styled(Link)`
    display: flex;
    width: 60px;
    aspect-ratio: 2 / 1;
    background-image: url(${logoM});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
        background-image: url(${logo});
        width: 90px;
        aspect-ratio: 1.2857 / 1;
    }
    &.footer-logo {
        width: 90px;
        aspect-ratio: 2.3346 / 1;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 24px;
        background-image: url(${logoM});
    }
`;
