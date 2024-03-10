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
    -ms-overflow-style: ${({ device }) =>
        device === 'desktop' ? 'none' : 'auto'};
    overflow: auto;
    scrollbar-width: ${({ device }) =>
        device === 'desktop' ? 'none' : 'auto'};
    &::-webkit-scrollbar {
        display: ${({ device }) => (device === 'desktop' ? 'none' : 'auto')};
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
    display: ${({ displayStyle }) => displayStyle};
    gap: 1rem;

    grid-template: ${({ noButton }) =>
        noButton ? '1fr' : 'auto 1fr auto / 1fr'};
    place-items: center;
    opacity: 0.5;
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
`;

export const SBButton = styled.button`
    width: 8px;
    height: 8px;
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
        width: 8px;
    }
    &.sb-x {
        height: 8px;
        width: 100%;
    }
`;

export const SBBar = styled.div`
    bottom: 0;
    cursor: pointer;
    position: absolute;
    background: ${({ theme }) => theme.colors.scrollBar};
    border-radius: 4px;
    &.sb-y {
        top: 0;
        width: 8px;
    }
    &.sb-x {
        bottom: 0;
        width: 100%;
        height: 8px;
    }
`;

export const SBControl = styled.div`
    position: absolute;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.scrollBarControl};
    &.sb-y {
        width: 8px;
    }
    &.sb-x {
        height: 8px;
        width: 40px;
    }
`;
