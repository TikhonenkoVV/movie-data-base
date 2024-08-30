import styled from '@emotion/styled';

export const Toggler = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.light};
    background-color: ${({ theme }) => theme.colors.hover};
`;

export const BtnWrapper = styled.div`
    position: absolute;
    top: auto;
    bottom: calc(100% + 5px);
    left: 0;
    padding: 5px;
    border-radius: 15px;
    opacity: 0;
    background-color: ${({ theme }) => theme.colors.hover};
    transition: opacity ${({ theme }) => theme.baseTransition};
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.accent};
    &.open {
        opacity: 1;
    }
    @media ${({ theme }) => theme.breakpoints.m} {
        top: calc(100% + 5px);
        bottom: auto;
    }
`;

export const LangButton = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    height: 20px;
    opacity: 0.5;
    filter: grayscale(1);
    transition: filter ${({ theme }) => theme.baseTransition},
        opacity ${({ theme }) => theme.baseTransition};
    &:not(:last-child) {
        margin-bottom: 5px;
    }
    &.active {
        filter: grayscale(0);
        opacity: 1;
    }
    &:hover {
        filter: grayscale(0);
        opacity: 1;
    }
`;
