import styled from '@emotion/styled';

export const Title = styled.h2`
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    &::first-letter {
        text-transform: uppercase;
    }
`;

export const CreditsList = styled.ul`
    padding: ${({ theme }) => theme.spacing.retreatS};
    border: 1px solid gray;
    &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    }
`;
