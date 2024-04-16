import {
    CollectionBtn,
    Description,
    MovieInfoWrapper,
    MovieWrapper,
    Poster,
    PosterWrapper,
    ScoreBox,
    ScoreBoxTitle,
    TitleMajor,
    TitleMinor,
    TrailerBtn,
} from './MediaInfo.styled';
import noPoster from '../../../assets/images/no-poster.jpg';
import sprite from '../../../assets/images/sprite.svg';
import { useEffect, useRef, useState } from 'react';
import { useModal } from '../MediaDetails';
import { Modal } from './Modal/Modal';
import { POSTER_W342 } from 'common/constants';
import { Container } from 'ui/shared/layouts/Container/Container';
import { ScoreBar } from 'ui/shared/components/ScoreBar/ScoreBar';
import { Svg } from 'ui/shared/components/Svg/Svg';
import { useSelector } from 'react-redux';
import { selectDictionary } from 'common/store/selector';

export const MediaInfo = ({ movie, onClose, directing, trailer }) => {
    const {
        score,
        playTrailer,
        owerview,
        txt_genres,
        director,
        directors,
        creator,
        creators,
        viewCollection,
    } = useSelector(selectDictionary);

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
    const gridItemRef = useRef(null);
    const posterRef = useRef(null);
    const [itemHeight, setItemHeight] = useState(0);
    const [bgrHeight, setBgrHeight] = useState(0);
    const creatorsArr = [];
    const directorsArr = [];
    created_by?.map(el => creatorsArr.push(el.name));
    directing?.map(el => directorsArr.push(el.personName));

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
        <section>
            <Container>
                <MovieWrapper
                    itemHeight={itemHeight}
                    bgrHeight={bgrHeight}
                    bgr={backdrop_path}
                >
                    <PosterWrapper bgr={backdrop_path}>
                        <Poster
                            ref={posterRef}
                            src={
                                poster_path
                                    ? POSTER_W342 + poster_path
                                    : noPoster
                            }
                            alt={name}
                        />
                    </PosterWrapper>
                    <MovieInfoWrapper ref={gridItemRef}>
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
                            <ScoreBoxTitle>{score}</ScoreBoxTitle>
                            {trailer && (
                                <TrailerBtn onClick={onClose}>
                                    <Svg
                                        w={20}
                                        h={20}
                                        use={`${sprite}#icon-play`}
                                    />
                                    {playTrailer}
                                </TrailerBtn>
                            )}
                        </ScoreBox>
                    </MovieInfoWrapper>
                    <MovieInfoWrapper className="end">
                        <TitleMajor>{owerview}</TitleMajor>
                        <Description>{overview}</Description>
                        <TitleMajor>{txt_genres}</TitleMajor>
                        <Description>
                            {genres?.map(({ name }) => name).join(', ')}
                        </Description>
                        {created_by && (
                            <>
                                <TitleMajor>
                                    {creatorsArr.length === 1
                                        ? creator
                                        : creators}
                                </TitleMajor>
                                <Description>
                                    {creatorsArr.join(', ')}
                                </Description>
                            </>
                        )}
                        {directing?.length > 0 && !created_by && (
                            <>
                                <TitleMajor>
                                    {directorsArr.length === 1
                                        ? director
                                        : directors}
                                </TitleMajor>
                                <Description>
                                    {directorsArr.join(', ')}
                                </Description>
                            </>
                        )}
                        {belongs_to_collection && (
                            <CollectionBtn
                                to={`/movies/collections/collection-${belongs_to_collection}`}
                            >
                                {viewCollection}
                            </CollectionBtn>
                        )}
                    </MovieInfoWrapper>
                    {isModalOpen && <Modal onClose={onClose} />}
                </MovieWrapper>
            </Container>
        </section>
    );
};
