import { useEffect, useRef, useState } from 'react';
import {
    Expander,
    RevieText,
    RevievItemStyled,
    ReviewAutor,
    ReviewGradient,
    ReviewWrapper,
} from './ReviewItem.styled';

export const ReviewItem = ({ author, content }) => {
    const comment = useRef();
    const commentBox = useRef();
    const blur = useRef();
    const [clientHeight, setClientHeight] = useState();
    const [expandedHeight, setExpandedHeight] = useState();

    useEffect(() => {
        const res = comment.current.clientHeight;
        setClientHeight(res);
        if (res <= 81) {
            setExpandedHeight(comment.current.clientHeight);
        } else setExpandedHeight(81);
    }, []);

    const hendleClick = () => {
        commentBox.current.classList.toggle('expanded');
        blur.current.classList.toggle('expanded');
    };

    return (
        <RevievItemStyled>
            <ReviewAutor>Author: {author}</ReviewAutor>
            <ReviewWrapper
                ref={commentBox}
                clientH={clientHeight}
                expandedH={expandedHeight}
            >
                <RevieText ref={comment}>{content}</RevieText>
                {clientHeight >= 81 && <ReviewGradient ref={blur} />}
            </ReviewWrapper>
            {clientHeight >= 81 && (
                <Expander type="button" onClick={hendleClick}>
                    Full review
                </Expander>
            )}
        </RevievItemStyled>
    );
};
