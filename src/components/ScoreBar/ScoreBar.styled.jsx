import styled from '@emotion/styled';
import { setColor } from 'services/set-color';

export const Score = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border: 1px dashed white;
    border-radius: 50%;
    & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        /* border: 10px solid ${props => props.theme.colors.accent}; */
        border-radius: 50%;
        width: 54px;
        height: 54px;
        background-color: ${props => props.theme.colors.accent};
    }
`;

export const ScoreProgressBar = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(270deg);
`;

export const ScoreCircle = styled.circle`
    fill: none;
    stroke: ${props => props.color};
    stroke-width: 6;
    transform: translate(3px, 3px);
    stroke-dasharray: 138;
    stroke-dashoffset: ${props => props.length};
`;

export const ScoreSpan = styled.span``;
