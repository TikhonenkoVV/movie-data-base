import styled from '@emotion/styled';

export const StyledContainer = styled.div`
    width: 100%;

    padding-left: ${({ theme }) => theme.spacing.retreatS};
    padding-right: ${({ theme }) => theme.spacing.retreatS};

    margin-left: auto;
    margin-right: auto;

    @media ${({ theme }) => theme.breakpoints.xs} {
        width: ${({ theme }) => theme.sizes.xs};
    }
    @media ${({ theme }) => theme.breakpoints.s} {
        width: ${({ theme }) => theme.sizes.s};
        padding-left: ${({ theme }) => theme.spacing.retreatM};
        padding-right: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.m} {
        width: ${({ theme }) => theme.sizes.m};
    }
    @media ${({ theme }) => theme.breakpoints.l} {
        width: ${({ theme }) => theme.sizes.l};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        width: ${({ theme }) => theme.sizes.xl};
        padding-left: ${({ theme }) => theme.spacing.retreatL};
        padding-right: ${({ theme }) => theme.spacing.retreatL};
    }
    @media ${({ theme }) => theme.breakpoints.xxl} {
        width: ${({ theme }) => theme.sizes.xxl};
    }
`;
