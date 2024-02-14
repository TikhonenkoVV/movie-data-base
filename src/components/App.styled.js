import styled from '@emotion/styled';

export const Container = styled.div`
    width: 100%;

    padding-left: ${({ theme }) => theme.spacing.step * 5}px;
    padding-right: ${({ theme }) => theme.spacing.step * 5}px;

    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
        width: ${({ theme }) => theme.breakpoints.s};
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
        width: ${({ theme }) => theme.breakpoints.m};
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
        width: ${({ theme }) => theme.breakpoints.l};
    }
`;

export const MainStyled = styled.main`
    padding: 20px 0;
    min-height: calc(100vh - 110px);
    background-color: ${({ theme }) => theme.colors.mainBackground};
    transition: background-color ${({ theme }) => theme.baseTransition};
`;

export const TrendsTogler = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 10px;
    margin-bottom: 20px;
`;

export const HomeTitle = styled.h1`
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

export const Grid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: ${({ theme }) => theme.spacing.step * 5}px;
    @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const GridItem = styled.li`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.accent};

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    overflow: hidden;
    cursor: zoom-in;

    &:hover,
    &:focus {
        box-shadow: 0px 2px 10px 2px ${({ theme }) => theme.colors.shadow};
    }
    &:hover img,
    &:focus img {
        transform: scale(1.05);
    }
    /* &:hover .js-overlay,
    &:focus .js-overlay {
        opacity: 1;
        transform: translateY(0);
    } */
`;

export const BtnBack = styled;
