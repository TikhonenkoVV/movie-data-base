import { useEffect, useRef, useState } from 'react';
import {
    BgrCircle,
    Score,
    ScoreCircle,
    ScoreProgressBar,
    ScoreSpan,
} from './ScoreBar.styled';
import { setColor } from 'services/set-color';

export const ScoreBar = ({ rating, style, size }) => {
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
        <Score size={size} style={{ ...style }}>
            <ScoreProgressBar
                width={50 * size}
                height={50 * size}
                viewBox={`0 0 ${size * 50} ${size * 50}`}
            >
                <BgrCircle
                    size={size}
                    cx={25 * size}
                    cy={25 * size}
                    r={23 * size}
                ></BgrCircle>
                <ScoreCircle
                    size={size}
                    color={currenColor}
                    length={currentLength}
                    ref={AnimCircle}
                    cx={25 * size}
                    cy={25 * size}
                    r={23 * size}
                ></ScoreCircle>
            </ScoreProgressBar>
            <ScoreSpan size={size}>
                {!isNaN(rating) ? rating + '%' : rating}
            </ScoreSpan>
        </Score>
    );
};
