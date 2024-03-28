import styled from '@emotion/styled';

export const SectionTitle = styled.h1`
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    color: ${({ theme }) => theme.colors.themeText};
    @media ${({ theme }) => theme.breakpoints.s} {
        margin-bottom: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        margin-bottom: ${({ theme }) => theme.spacing.retreatL};
    }
`;
