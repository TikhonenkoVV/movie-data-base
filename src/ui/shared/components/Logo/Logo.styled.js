import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logoM from '../../../assets/images/logo-m.svg';

export const Logotype = styled(Link)`
    flex-shrink: 0;
    display: flex;
    width: 90px;
    aspect-ratio: 3.125 / 1;
    background-image: url(${logoM});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    &.footer-logo {
        width: 90px;
        aspect-ratio: 3.125 / 1;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 24px;
        background-image: url(${logoM});
    }
`;
