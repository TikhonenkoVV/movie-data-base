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
import noPoster from '../../../../../images/no-poster.jpg';
import { ScoreBar } from 'ui/Layout/globalComponents/components/ScoreBar/ScoreBar';
import { Container } from 'ui/Layout/globalComponents/layouts/Container/Container';
import { POSTER_W342 } from 'common/constants';

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
    const gridItem = useRef(null);
    const [itemHeight, setItemHeight] = useState(0);

    useEffect(() => {
        if (gridItem.current) {
            const item = gridItem.current;
            observer.current = new ResizeObserver(() => {
                if (gridItem.current) {
                    const { clientHeight } = item;
                    setItemHeight(clientHeight);
                }
            });
            observer.current.observe(item);
        }
    }, []);

    return (
        <section>
            <Container>
                <CollectionWrapper itemHeight={itemHeight} bgr={backdrop_path}>
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
                                src={
                                    poster_path
                                        ? POSTER_W342 + poster_path
                                        : noPoster
                                }
                                alt={name}
                            />
                        </picture>
                    </PosterWrapper>
                    <CollectionInfoWrapper ref={gridItem}>
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
                        <Description>
                            {genre_ids?.map(el => el).join(', ')}
                        </Description>
                    </CollectionInfoWrapper>
                </CollectionWrapper>
            </Container>
        </section>
    );
};
