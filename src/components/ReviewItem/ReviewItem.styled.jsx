import styled from '@emotion/styled';

export const RevievItemStyled = styled.li`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const ReviewAutor = styled.h2`
    margin-bottom: 20px;
`;

export const ReviewWrapper = styled.div`
    position: relative;
    overflow-y: hidden;
    height: ${props => props.expandedH}px;
    transition: height 0.5s;
    &.expanded {
        height: ${props => props.clientH}px;
    }
`;

export const ReviewGradient = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 20px;
    transition: opacity 0.5s;
    background-image: linear-gradient(${props => props.theme.lg.whiteSpace});
    &.expanded {
        opacity: 0;
    }
`;

export const RevieText = styled.p``;

export const Expander = styled.button`
    height: 40px;
    color: ${props => props.theme.colors.light};
    transition: color 250ms;
    ${console.log(props => props.theme.colors.white)}
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.white};
    }
`;
