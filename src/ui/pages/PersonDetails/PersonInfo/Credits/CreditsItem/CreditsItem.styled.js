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
    flex-shrink: 0;
    width: 70px;
    height: 105px;
    overflow: hidden;
`;

export const Title = styled.h3`
    margin-bottom: 12px;
`;

export const Description = styled.p`
    &::first-letter {
        text-transform: uppercase;
    }
`;
