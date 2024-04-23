import { useEffect, useRef, useState } from 'react';
import {
    Expander,
    RevieText,
    RevievItemStyled,
    ReviewAutor,
    ReviewGradient,
    ReviewWrapper,
} from './ReviewItem.styled';
import { useTranslate } from 'hooks/useTranslate';

export const ReviewItem = ({ author, content }) => {
    const { t } = useTranslate();

    const comment = useRef();
    const commentBox = useRef();
    const blur = useRef();
    const [clientHeight, setClientHeight] = useState();
    const [expandedHeight, setExpandedHeight] = useState();
    const [expandedReview, setExpandedReview] = useState(false);

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
        setExpandedReview(!expandedReview);
    };

    return (
        <RevievItemStyled>
            <ReviewAutor>
                {t('author')}: {author}
            </ReviewAutor>
            <ReviewWrapper
                ref={commentBox}
                clientH={clientHeight}
                expandedH={expandedHeight}
            >
                <RevieText ref={comment}>{content}</RevieText>
                {clientHeight >= 81 && <ReviewGradient ref={blur} />}
            </ReviewWrapper>
            {clientHeight >= 81 && (
                <Expander
                    aria-expanded={expandedReview}
                    type="button"
                    onClick={hendleClick}
                >
                    {!expandedReview ? t('expand') : t('collapse')}
                </Expander>
            )}
        </RevievItemStyled>
    );
};
