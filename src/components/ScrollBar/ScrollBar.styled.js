import styled from '@emotion/styled';

export const SBContainer = styled.div`
    display: grid;
    height: 100%;
    /* grid-template: auto / 1fr 50px; */
    /* overflow: hidden; */
    position: relative;
`;

export const SBContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    -ms-overflow-style: none;
    overflow: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const SBContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.content {
        width: max-content;
    }
`;

export const SBScrollBar = styled.div`
    display: grid;
    gap: 1rem;

    grid-template: ${({ noButton }) =>
        noButton ? '1fr' : 'auto 1fr auto / 1fr'};
    place-items: center;
    opacity: 0.2;
    transition: ${({ theme }) => theme.baseTransition};
    &.sb-y {
        position: absolute;
        padding: 10px 5px;
        grid-auto-flow: row;
        right: 0;
        height: 100%;
    }
    &.sb-x {
        padding: 5px 10px;
        grid-auto-flow: column;
        /* bottom: 0; */
        width: 100%;
    }
    &:hover {
        opacity: 0.5;
    }
`;

export const SBButton = styled.button`
    width: 16px;
    height: 16px;
    border: none;
    border-radius: 50%;
    color: #cecdc3;
    background-color: ${({ theme }) => theme.colors.scrollBarControl};
    cursor: pointer;
    &:hover {
        background-color: red;
    }
`;

export const SBBarWrapper = styled.div`
    display: block;
    position: relative;
    &.sb-y {
        height: 100%;
        width: 16px;
    }
    &.sb-x {
        height: 16px;
        width: 100%;
    }
`;

export const SBBar = styled.div`
    bottom: 0;
    cursor: pointer;
    position: absolute;
    background: ${({ theme }) => theme.colors.scrollBar};
    border-radius: 8px;
    &.sb-y {
        top: 0;
        width: 16px;
    }
    &.sb-x {
        bottom: 0;
        width: 100%;
        height: 16px;
    }
`;

export const SBControl = styled.div`
    position: absolute;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.scrollBarControl};
    &.sb-y {
        width: 16px;
    }
    &.sb-x {
        height: 16px;
        width: 40px;
    }
`;
