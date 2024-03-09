import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.accent};
    transition: background-color ${({ theme }) => theme.baseTransition};
`;
