import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CastWrapper = styled.div`
    position: relative;
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    overflow-x: auto;
    @media ${({ theme }) => theme.breakpoints.s} {
        margin-bottom: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        margin-bottom: ${({ theme }) => theme.spacing.retreatL};
    }
    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: calc(100% - 16px);
        width: 80px;
        background-image: linear-gradient(${({ theme }) => theme.lg.curtain});
        opacity: ${({ curtain }) => (curtain ? 1 : 0)};
        pointer-events: none;
        transition: opacity ${({ theme }) => theme.baseTransition};
        z-index: 1;
    }
`;

export const StyledCastList = styled.ul`
    display: flex;
    gap: 16px;
    /* padding-bottom: ${({ theme }) => theme.spacing.retreatS}; */
`;

export const CastCard = styled.li`
    width: 150px;
    border-radius: 16px;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
`;

export const CastLink = styled(Link)`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const CastPoster = styled.img`
    aspect-ratio: 2/3;
    object-fit: cover;
`;

export const CastInfo = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const ActorName = styled.p`
    font-weight: 700;
    margin-bottom: 8px;
`;
