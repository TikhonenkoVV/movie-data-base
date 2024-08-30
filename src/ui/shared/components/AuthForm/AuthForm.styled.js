import styled from '@emotion/styled';

export const StyledForm = styled.form`
    padding-top: ${({ theme }) => theme.spacing.retreatS};
    padding-bottom: calc(${({ theme }) => theme.spacing.retreatS}*3);
    @media ${({ theme }) => theme.breakpoints.s} {
        padding-top: ${({ theme }) => theme.spacing.retreatM};
        padding-bottom: calc(${({ theme }) => theme.spacing.retreatM}*3);
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        padding-top: ${({ theme }) => theme.spacing.retreatL};
        padding-bottom: calc(${({ theme }) => theme.spacing.retreatL}*3);
    }
`;
