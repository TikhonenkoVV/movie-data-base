import styled from '@emotion/styled';

export const Description = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.preMedium};
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    padding: 8px;
    text-align: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: ${({ theme }) => theme.colors.mediumBackground};
    color: ${({ theme }) => theme.colors.themeText};
    @media ${({ theme }) => theme.breakpoints.s} {
        margin-bottom: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.m} {
        font-size: ${({ theme }) => theme.fontSizes.large};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        margin-bottom: ${({ theme }) => theme.spacing.retreatL};
    }
`;
