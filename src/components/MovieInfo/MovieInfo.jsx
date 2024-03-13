import {
    Description,
    MovieInfoWrapper,
    MovieWrapper,
    Poster,
    PosterWrapper,
    ScoreBox,
    TitleMajor,
    TitleMinor,
    TrailerBtn,
} from './MovieInfo.styled';
import { ScoreBar } from 'components/ScoreBar/ScoreBar';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'components/MovieDetails/MovieDetails';
import { Container } from 'components/Container/Container';
import { Svg } from 'components/Svg/Svg';
import noPoster from '../../images/no-poster.jpg';
import sprite from '../../images/sprite.svg';
import { useEffect, useRef, useState } from 'react';

export const MovieInfo = ({ movie, onClose, directing, trailer }) => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
    const IMAGES_BASE_URL_RETINA =
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

    const {
        vote_average,
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
                        <picture>
                            <source
                                srcSet={
                                    poster_path
                                        ? `${
                                              IMAGES_BASE_URL + poster_path
                                          } 1x, ${
                                              IMAGES_BASE_URL_RETINA +
                                              poster_path
                                          } 2x`
                                        : noPoster
                                }
                            />

                            <Poster
                                src={
                                    poster_path
                                        ? IMAGES_BASE_URL + poster_path
                                        : noPoster
                                }
                                alt={name}
                            />
                        </picture>
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
                    </MovieInfoWrapper>
                    {isModalOpen && <Modal onClose={onClose} />}
                </MovieWrapper>
            </Container>
        </section>
    );
};
