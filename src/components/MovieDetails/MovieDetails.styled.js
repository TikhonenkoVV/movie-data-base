import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CastSection = styled.section`
    padding-top: 24px;
    padding-bottom: 24px;
`;

export const DetailsTitle = styled.h2`
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.themeText};
`;

export const StyledLink = styled(Link)`
    display: block;
    /* width: 100%; */
    /* height: 100%; */
    padding: 10px 20px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.accent};
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: ${({ theme }) => theme.colors.white};
    }
`;
