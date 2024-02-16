import styled from '@emotion/styled';

export const StyledTogler = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 10px;
    margin-bottom: 20px;
`;

export const TogglerTitle = styled.h1`
    text-align: center;
    color: ${({ theme }) => theme.colors.themeText};
    font-size: ${({ theme }) => theme.fontSizes.large};
    transition: color ${({ theme }) => theme.baseTransition};
    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        font-size: ${({ theme }) => theme.fontSizes.xl};
    }
`;

export const TrendsBtnWrapper = styled.div`
    position: relative;
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.hover};
    border-radius: 17px;
    overflow: hidden;
`;

export const TrendsBtn = styled.button`
    flex-basis: 50%;
    width: 100px;
    height: 100%;
    color: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.fontSizes.small};
    transition: background-color ${({ theme }) => theme.baseTransition},
        color ${({ theme }) => theme.baseTransition};
    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }
    &:hover,
    &:focus {
        color: ${({ theme }) => theme.colors.themeText};
    }
    &.active {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.hover};
    }
`;
