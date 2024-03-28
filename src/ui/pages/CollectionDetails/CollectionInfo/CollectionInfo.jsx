import {
    CollectionInfoWrapper,
    CollectionWrapper,
    Description,
    Poster,
    PosterWrapper,
    ScoreBox,
    TitleMajor,
    TitleMinor,
} from './CollectionInfo.styled';
import { useEffect, useRef, useState } from 'react';
import noPoster from '../../../assets/images/no-poster.jpg';
import { POSTER_W342 } from 'common/constants';
import { ScoreBar } from 'ui/shared/components/ScoreBar/ScoreBar';

export const CollectionInfo = ({ collection }) => {
    const {
        name,
        overview,
        poster_path,
        backdrop_path,
        vote_average,
        genre_ids,
    } = collection;

    const observer = useRef(null);
    const gridItemRef = useRef(null);
    const posterRef = useRef(null);
    const [itemHeight, setItemHeight] = useState(0);
    const [bgrHeight, setBgrHeight] = useState(0);

    useEffect(() => {
        const item = gridItemRef.current;
        const poster = posterRef.current;
        observer.current = new ResizeObserver(() => {
            if (gridItemRef.current) {
                const { clientHeight: itemHeight } = item;
                const { clientHeight: posterHeight } = poster;
                if (itemHeight > posterHeight) {
                    setItemHeight(itemHeight);
                } else setItemHeight(posterHeight);
                setBgrHeight(itemHeight);
            }
        });
        observer.current.observe(item);
    }, []);

    return (
        <CollectionWrapper
            itemHeight={itemHeight}
            bgrHeight={bgrHeight}
            bgr={backdrop_path}
        >
            <PosterWrapper bgr={backdrop_path}>
                <picture>
                    <source
                        srcSet={
                            poster_path
                                ? `${POSTER_W342 + poster_path} 1x`
                                : noPoster
                        }
                    />

                    <Poster
                        ref={posterRef}
                        src={poster_path ? POSTER_W342 + poster_path : noPoster}
                        alt={name}
                    />
                </picture>
            </PosterWrapper>
            <CollectionInfoWrapper ref={gridItemRef}>
                <TitleMinor>{name}</TitleMinor>
                <ScoreBox>
                    <ScoreBar size={1} rating={vote_average} />
                    <h3>User Score</h3>
                </ScoreBox>
            </CollectionInfoWrapper>
            <CollectionInfoWrapper className="end">
                <TitleMajor>Owerview</TitleMajor>
                <Description>{overview}</Description>
                <TitleMajor>Genres</TitleMajor>
                <Description>{genre_ids?.map(el => el).join(', ')}</Description>
            </CollectionInfoWrapper>
        </CollectionWrapper>
    );
};
