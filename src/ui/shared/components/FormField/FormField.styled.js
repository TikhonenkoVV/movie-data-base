import styled from '@emotion/styled';

export const Field = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.themeText};
    &::first-letter {
        text-transform: uppercase;
    }
`;

export const Input = styled.input`
    display: block;
    height: 28px;
    padding: 0 10px;
    border-radius: 14px;
    color: inherit;
    background-color: inherit;
`;
