import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
    text-align: center;
    color: ${({ theme }) => theme.colors.themeText};
`;

export const FormFieldBox = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    @media ${({ theme }) => theme.breakpoints.s} {
        margin-bottom: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        margin-bottom: ${({ theme }) => theme.spacing.retreatL};
    }
`;

export const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 44px;
    padding: 0;
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

export const SubTitle = styled.p`
    color: ${({ theme }) => theme.colors.themeText};
    margin-bottom: 5px;
`;

export const SinUpButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 44px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
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
