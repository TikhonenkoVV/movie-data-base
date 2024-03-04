import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
    padding-top: 24px;
    padding-bottom: 24px;
    color: ${({ theme }) => theme.colors.themeText};
`;

export const CastCrewWrapper = styled.div`
    flex-basis: calc((100% - 24px) / 2);
    border: 1px solid #808080;
    padding: 16px;
`;

export const MinorTitle = styled.h2`
    margin-bottom: 16px;
`;

export const CardListItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const MajorTitle = styled.h3`
    margin-bottom: 16px;
`;

export const Card = styled.li`
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    gap: 16px;
`;

export const Poster = styled.img`
    border-radius: 5px;
`;
