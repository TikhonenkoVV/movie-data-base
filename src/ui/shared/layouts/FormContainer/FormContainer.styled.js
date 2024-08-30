import styled from '@emotion/styled';

export const StyledFormContainer = styled.div`
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
    padding-top: ${({ theme }) => theme.spacing.retreatS};
    @media ${({ theme }) => theme.breakpoints.s} {
        padding-top: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        padding-top: ${({ theme }) => theme.spacing.retreatL};
    }
`;
