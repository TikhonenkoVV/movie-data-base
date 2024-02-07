import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Item = styled.li`
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    gap: 16px;
`;

export const ImageWrapper = styled.div`
    width: 70px;
    height: 105px;
    overflow: hidden;
`;

export const Title = styled.h3`
    margin-bottom: 12px;
`;
