import styled from '@emotion/styled';

export const ReviewTitle = styled.h2`
    color: ${({ theme }) => theme.colors.themeText};
    margin-bottom: 20px;
    transition: color ${({ theme }) => theme.baseTransition};
`;
