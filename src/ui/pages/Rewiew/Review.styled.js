import styled from '@emotion/styled';

export const ReviewTitle = styled.h2`
    margin-bottom: 20px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.themeText};
    transition: color ${({ theme }) => theme.baseTransition};
`;
