import styled from '@emotion/styled';

export const Title = styled.h1`
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: ${({ theme }) => theme.colors.themeText};
    background-color: ${({ theme }) => theme.colors.mediumBackground};
    border-bottom-left-radius: ${({ theme }) => theme.spacing.retreatS};
    border-bottom-right-radius: ${({ theme }) => theme.spacing.retreatS};
    transition: color ${({ theme }) => theme.baseTransition},
        background-color ${({ theme }) => theme.baseTransition};
    @media ${({ theme }) => theme.breakpoints.s} {
        margin-bottom: ${({ theme }) => theme.spacing.retreatM};
        border-bottom-left-radius: ${({ theme }) => theme.spacing.retreatM};
        border-bottom-right-radius: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        margin-bottom: ${({ theme }) => theme.spacing.retreatL};
        border-bottom-left-radius: ${({ theme }) => theme.spacing.retreatL};
        border-bottom-right-radius: ${({ theme }) => theme.spacing.retreatL};
    }
`;
