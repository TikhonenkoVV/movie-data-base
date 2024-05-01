import styled from '@emotion/styled';

export const StyledForm = styled.form`
    padding-top: ${({ theme }) => theme.spacing.retreatS};
    padding-bottom: ${({ theme }) => theme.spacing.retreatS};
    @media ${({ theme }) => theme.breakpoints.s} {
        padding-top: ${({ theme }) => theme.spacing.retreatM};
        padding-bottom: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        padding-top: ${({ theme }) => theme.spacing.retreatL};
        padding-bottom: ${({ theme }) => theme.spacing.retreatL};
    }
`;

export const Field = styled.label`
    display: block;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.themeText};
`;

export const Input = styled.input`
    display: block;
    background-color: inherit;
`;

export const SubmitButton = styled.button`
    color: ${({ theme }) => theme.colors.themeText};
`;
