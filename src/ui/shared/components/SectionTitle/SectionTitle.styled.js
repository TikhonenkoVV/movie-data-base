import styled from '@emotion/styled';

export const Title = styled.h1`
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    padding-top: ${({ theme }) => theme.spacing.retreatS};
    padding-bottom: ${({ theme }) => theme.spacing.retreatS};
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
    border-bottom-left-radius: ${({ theme }) => theme.spacing.retreatS};
    border-bottom-right-radius: ${({ theme }) => theme.spacing.retreatS};
    @media ${({ theme }) => theme.breakpoints.s} {
        margin-bottom: ${({ theme }) => theme.spacing.retreatM};
        padding-top: ${({ theme }) => theme.spacing.retreatM};
        padding-bottom: ${({ theme }) => theme.spacing.retreatM};
        border-bottom-left-radius: ${({ theme }) => theme.spacing.retreatM};
        border-bottom-right-radius: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        margin-bottom: ${({ theme }) => theme.spacing.retreatL};
        padding-top: ${({ theme }) => theme.spacing.retreatL};
        padding-bottom: ${({ theme }) => theme.spacing.retreatL};
        border-bottom-left-radius: ${({ theme }) => theme.spacing.retreatL};
        border-bottom-right-radius: ${({ theme }) => theme.spacing.retreatL};
    }
`;
