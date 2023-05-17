import styled from '@emotion/styled';

export const Container = styled.div`
    width: 100%;

    padding-left: ${props => props.theme.spacing.step * 5}px;
    padding-right: ${props => props.theme.spacing.step * 5}px;

    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${props => props.theme.breakpoints.s}) {
        width: ${props => props.theme.breakpoints.s};
    }
    @media (min-width: ${props => props.theme.breakpoints.m}) {
        width: ${props => props.theme.breakpoints.m};
    }
    @media (min-width: ${props => props.theme.breakpoints.l}) {
        width: ${props => props.theme.breakpoints.l};
    }
`;

export const MainStyled = styled.main`
    padding: 20px 0;
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
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.large};
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
        font-size: ${props => props.theme.fontSizes.xl};
    }
`;

export const TrendsBtnWrapper = styled.div`
    position: relative;
    display: flex;
    border: 1px solid ${props => props.theme.colors.hover};
    border-radius: 17px;
    overflow: hidden;
`;

export const TrendsBtn = styled.button`
    flex-basis: 50%;
    width: 100px;
    height: 100%;
    color: ${props => props.theme.colors.light};
    font-size: ${props => props.theme.fontSizes.small};
    transition: color 250ms;
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
        font-size: ${props => props.theme.fontSizes.medium};
    }
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.white};
    }
    &.active {
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.hover};
    }
`;

export const Grid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: ${props => props.theme.spacing.step * 5}px;
    @media (min-width: ${props => props.theme.breakpoints.s}) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const GridItem = styled.li`
    display: flex;
    flex-direction: column;
    aspect-ratio: 2 / 3;
    background-color: ${props => props.theme.colors.accent};

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    overflow: hidden;
    cursor: zoom-in;

    &:hover,
    &:focus {
        box-shadow: 0px 2px 10px 2px #464545;
    }
    &:hover img,
    &:focus img {
        transform: scale(1.05);
    }
    &:hover .js-overlay,
    &:focus .js-overlay {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const BtnBack = styled;
