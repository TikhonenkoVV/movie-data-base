import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Card = styled.li`
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    gap: 16px;
`;
