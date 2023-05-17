import styled from '@emotion/styled';

export const ReviewTitle = styled.h2`
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 20px;
`;

export const ReviewList = styled.ul`
    display: grid;
    gap: 20px;
`;

export const RevievItem = styled.li`
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
`;

export const ReviewGradient = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 20px;
    background-image: linear-gradient(${props => props.theme.lg.whiteSpace});
`;

export const RevieText = styled.p`
    max-height: 81px;
    overflow: hidden;
`;

export const Expander = styled.button`
    height: 40px;
    color: ${props => props.theme.colors.light};
    transition: color 250ms;
    &:hover,
    &:focus {
        color: ${props => props.theme.colors.white};
    }
`;
