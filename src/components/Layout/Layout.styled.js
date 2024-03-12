import styled from '@emotion/styled';

export const MainStyled = styled.main`
    flex-grow: 1;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    transition: background-color ${({ theme }) => theme.baseTransition};
`;
