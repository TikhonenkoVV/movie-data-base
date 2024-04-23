import styled from '@emotion/styled';

export const RevievItemStyled = styled.li`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const ReviewAutor = styled.h3`
    margin-bottom: 20px;
    text-transform: capitalize;
`;

export const ReviewWrapper = styled.div`
    position: relative;
    overflow-y: hidden;
    height: ${({ expandedH }) => expandedH}px;
    transition: height 0.5s;
    &.expanded {
        height: ${({ clientH }) => clientH}px;
    }
`;

export const ReviewGradient = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 20px;
    transition: opacity 0.5s;
    background-image: linear-gradient(${({ theme }) => theme.lg.whiteSpace});
    &.expanded {
        opacity: 0;
    }
`;

export const RevieText = styled.p``;

export const Expander = styled.button`
    height: 40px;
    color: ${({ theme }) => theme.colors.light};
    transition: color 250ms;
    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
    &::first-letter {
        text-transform: uppercase;
    }
`;
