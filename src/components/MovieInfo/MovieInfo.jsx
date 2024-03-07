import {
    MovieInfoTitle,
    MovieInfoWrapper,
    MovieWrapper,
    Poster,
    PosterWrapper,
    ScoreBox,
    TrailerBtn,
} from './MovieInfo.styled';
import { ScoreBar } from 'components/ScoreBar/ScoreBar';
import { Modal } from 'components/Modal/Modal';
import { useModal } from 'components/MovieDetails/MovieDetails';
import { Container } from 'components/Container/Container';
import { Svg } from 'components/Svg/Svg';
import noPoster from '../../images/no-poster.jpg';
import sprite from '../../images/sprite.svg';

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
    const creators = [];
    const directors = [];
    created_by?.map(el => creators.push(el.name));
    directing?.map(el => directors.push(el.personName));

    return (
        <section>
            <Container>
                <MovieWrapper bgr={backdrop_path}>
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
                    <MovieInfoWrapper>
                        <MovieInfoTitle>{name}</MovieInfoTitle>
                        {release.release_date && (
                            <p>
                                {release.title}
                                {release.release_date}
                            </p>
                        )}
                        {first_air.first_air_date && (
                            <p>
                                {first_air.title}
                                {first_air.first_air_date}
                            </p>
                        )}
                        <ScoreBox>
                            <ScoreBar rating={vote_average} />
                            <h3>User Score</h3>
                            {trailer && (
                                <TrailerBtn onClick={onClose}>
                                    <Svg
                                        w="24"
                                        h="24"
                                        use={`${sprite}#icon-play`}
                                    />
                                    Play trailer
                                </TrailerBtn>
                            )}
                        </ScoreBox>
                        <h2>Owerview</h2>
                        <p>{overview}</p>
                        <h2>Genres</h2>
                        <p>{genres?.map(({ name }) => name).join(', ')}</p>
                        {created_by && (
                            <>
                                <h2>Creators</h2>
                                <p>{creators.join(', ')}</p>
                            </>
                        )}
                        {directing?.length > 0 && !created_by && (
                            <>
                                <h2>Director</h2>
                                <p>{directors.join(', ')}</p>
                            </>
                        )}
                    </MovieInfoWrapper>
                    {isModalOpen && <Modal onClose={onClose} />}
                </MovieWrapper>
            </Container>
        </section>
    );
};
