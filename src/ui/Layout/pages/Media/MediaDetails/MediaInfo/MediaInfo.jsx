import {
    CollectionBtn,
    Description,
    MovieInfoWrapper,
    MovieWrapper,
    Poster,
    PosterWrapper,
    ScoreBox,
    TitleMajor,
    TitleMinor,
    TrailerBtn,
} from './MediaInfo.styled';
import noPoster from '../../../../../images/no-poster.jpg';
import sprite from '../../../../../images/sprite.svg';
import { useEffect, useRef, useState } from 'react';
import { Container } from 'ui/Layout/globalComponents/layouts/Container/Container';
import { ScoreBar } from 'ui/Layout/globalComponents/components/ScoreBar/ScoreBar';
import { Svg } from 'ui/Layout/globalComponents/components/Svg/Svg';
import { useModal } from '../MediaDetails';
import { Modal } from './Modal/Modal';
import { POSTER_W342 } from 'common/constants';

export const MediaInfo = ({ movie, onClose, directing, trailer }) => {
    const {
        vote_average,
        belongs_to_collection,
        name,
        overview,
        genres,
        poster_path,
        release,
        first_air,
        backdrop_path,
        created_by,
    } = movie;
    const { isModalOpen } = useModal();
    const observer = useRef(null);
    const gridItem = useRef(null);
    const [itemHeight, setItemHeight] = useState(0);
    const creators = [];
    const directors = [];
    created_by?.map(el => creators.push(el.name));
    directing?.map(el => directors.push(el.personName));

    useEffect(() => {
        const item = gridItem.current;
        observer.current = new ResizeObserver(() => {
            if (gridItem.current) {
                const { clientHeight } = item;
                setItemHeight(clientHeight);
            }
        });
        observer.current.observe(item);
    }, []);

    return (
        <section>
            <Container>
                <MovieWrapper itemHeight={itemHeight} bgr={backdrop_path}>
                    <PosterWrapper bgr={backdrop_path}>
                        <Poster
                            src={
                                poster_path
                                    ? POSTER_W342 + poster_path
                                    : noPoster
                            }
                            alt={name}
                        />
                    </PosterWrapper>
                    <MovieInfoWrapper ref={gridItem}>
                        <TitleMinor>{name}</TitleMinor>
                        {release.release_date && (
                            <Description>
                                {release.title}
                                {release.release_date}
                            </Description>
                        )}
                        {first_air.first_air_date && (
                            <Description>
                                {first_air.title}
                                {first_air.first_air_date}
                            </Description>
                        )}
                        <ScoreBox>
                            <ScoreBar size={1} rating={vote_average} />
                            <h3>User Score</h3>
                            {trailer && (
                                <TrailerBtn onClick={onClose}>
                                    <Svg
                                        w={20}
                                        h={20}
                                        use={`${sprite}#icon-play`}
                                    />
                                    Play trailer
                                </TrailerBtn>
                            )}
                        </ScoreBox>
                    </MovieInfoWrapper>
                    <MovieInfoWrapper className="end">
                        <TitleMajor>Owerview</TitleMajor>
                        <Description>{overview}</Description>
                        <TitleMajor>Genres</TitleMajor>
                        <Description>
                            {genres?.map(({ name }) => name).join(', ')}
                        </Description>
                        {created_by && (
                            <>
                                <TitleMajor>
                                    {creators.length === 1
                                        ? 'Creator'
                                        : 'Creators'}
                                </TitleMajor>
                                <Description>{creators.join(', ')}</Description>
                            </>
                        )}
                        {directing?.length > 0 && !created_by && (
                            <>
                                <TitleMajor>
                                    {directors.length === 1
                                        ? 'Director'
                                        : 'Directors'}
                                </TitleMajor>
                                <Description>
                                    {directors.join(', ')}
                                </Description>
                            </>
                        )}
                        {belongs_to_collection && (
                            <CollectionBtn
                                to={`/movies/collections/collection-${belongs_to_collection}`}
                            >
                                View the collection
                            </CollectionBtn>
                        )}
                    </MovieInfoWrapper>
                    {isModalOpen && <Modal onClose={onClose} />}
                </MovieWrapper>
            </Container>
        </section>
    );
};
