import { useEffect, useRef, useState } from 'react';
import {
    Score,
    ScoreCircle,
    ScoreProgressBar,
    ScoreSpan,
    SpanStyled,
} from './ScoreBar.styled';
import { setColor } from 'services/set-color';

export const ScoreBar = ({ rating, style }) => {
    const AnimCircle = useRef();
    const [currentLength, setCurrentLength] = useState(0);
    const [currenColor, setCurrentColor] = useState(0);

    useEffect(() => {
        const totalLength = AnimCircle.current.getTotalLength();
        const circleLength = !isNaN(rating)
            ? totalLength - (totalLength / 100) * rating
            : 0;
        setCurrentLength(circleLength);
        setCurrentColor(!isNaN(rating) ? setColor(rating) : '#333');
    }, [rating, currentLength]);

    return (
        <Score style={{ ...style }}>
            <SpanStyled>
                <ScoreProgressBar width={50} height={50}>
                    <ScoreCircle
                        color={currenColor}
                        length={currentLength}
                        ref={AnimCircle}
                        cx={22}
                        cy={22}
                        r={22}
                    ></ScoreCircle>
                </ScoreProgressBar>
                <ScoreSpan>{rating}</ScoreSpan>
                {!isNaN(rating) && ' %'}
            </SpanStyled>
        </Score>
    );
};
