import { useEffect, useRef, useState } from 'react';
import {
    Score,
    ScoreCircle,
    ScoreProgressBar,
    ScoreSpan,
} from './ScoreBar.styled';
import { setColor } from 'services/set-color';

export const ScoreBar = ({ rating }) => {
    const AnimCircle = useRef();
    const Percentage = useRef();
    const [currentLength, setCurrentLength] = useState(0);
    const [currenColor, setCurrentColor] = useState(0);

    useEffect(() => {
        const totalLength = AnimCircle.current.getTotalLength();
        const circleLength =
            totalLength - (totalLength / 100) * Percentage.current.textContent;
        setCurrentLength(circleLength);
        setCurrentColor(setColor(Percentage.current.textContent));
    }, [currentLength]);

    return (
        <Score>
            <span>
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
                {/* {rating}% User score:{' '} */}
                <ScoreSpan ref={Percentage}>{rating}</ScoreSpan> %
            </span>
        </Score>
    );
};
