import styled from '@emotion/styled';

export const StyledTogler = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: center;
    gap: 10px;
    @media ${({ theme }) => theme.breakpoints.xs} {
        grid-template-columns: auto auto auto;
    }
`;

export const TogglerTitle = styled.h1`
    grid-column: span 2;
    text-align: center;
    color: ${({ theme }) => theme.colors.themeText};
    font-size: ${({ theme }) => theme.fontSizes.small};
    transition: color ${({ theme }) => theme.baseTransition};
    @media ${({ theme }) => theme.breakpoints.xs} {
        grid-column: auto;
        font-size: ${({ theme }) => theme.fontSizes.large};
    }
    @media ${({ theme }) => theme.breakpoints.s} {
        font-size: ${({ theme }) => theme.fontSizes.xl};
    }
`;

export const TrendsBtnWrapper = styled.div`
    position: relative;
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: 17px;
    overflow: hidden;
`;

export const TrendsBtn = styled.button`
    flex-basis: 50%;
    width: 100px;
    height: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    color: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.fontSizes.small};
    transition: background-color ${({ theme }) => theme.baseTransition},
        color ${({ theme }) => theme.baseTransition};
    @media ${({ theme }) => theme.breakpoints.xs} {
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }
    &:hover,
    &:focus {
        color: ${({ theme }) => theme.colors.themeText};
    }
    &.active {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.accent};
    }
`;
