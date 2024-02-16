import styled from '@emotion/styled';

export const MainStyled = styled.main`
    padding: 20px 0;
    min-height: calc(100vh - 110px);
    background-color: ${({ theme }) => theme.colors.mainBackground};
    transition: background-color ${({ theme }) => theme.baseTransition};
`;
