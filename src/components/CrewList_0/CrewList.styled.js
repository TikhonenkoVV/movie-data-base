import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DirectingWrapper = styled.div`
    overflow-x: auto;
`;

export const DirectingList = styled.ul`
    display: flex;
    gap: 16px;
    width: max-content;
`;

export const DirectingCard = styled.li`
    width: 150px;
    border-radius: 16px;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
`;

export const StyledDirectingLink = styled(Link)`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const DirectingPoster = styled.img`
    aspect-ratio: 2/3;
    object-fit: cover;
`;

export const DirectingInfo = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    text-align: center;
`;

export const DirectorName = styled.p`
    font-weight: 700;
    margin-bottom: 8px;
`;
