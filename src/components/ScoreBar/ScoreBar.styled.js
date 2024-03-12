import styled from '@emotion/styled';

export const Score = styled.span`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ size }) => size * 60}px;
    height: ${({ size }) => size * 60}px;
    border: 1px dashed white;
    border-radius: 50%;
    & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        background-color: #19171d;
    }
    pointer-events: none;
`;

export const ScoreProgressBar = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(270deg);
    z-index: 1;
`;

export const ScoreCircle = styled.circle`
    fill: none;
    stroke: ${({ color }) => color};
    stroke-width: ${({ size }) => size * 4};
    stroke-dasharray: ${({ size }) => 46 * 3.14 * size};
    stroke-dashoffset: ${({ length }) => length};
`;

export const BgrCircle = styled.circle`
    fill: none;
    stroke: #ffffff20;
    stroke-width: ${({ size }) => size * 4};
    stroke-dasharray: ${({ size }) => 46 * 3.14 * size};
`;

export const ScoreSpan = styled.span`
    font-size: ${({ size }) => size}em;
`;
