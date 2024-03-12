import { normalizeMoviesData } from 'services/normalize/normalizeMoviesData';
import {
    CardInfo,
    ImgWrapper,
    MovieLink,
    MovieTitle,
    StyledMediaCard,
    StyledMedialist,
} from './MediaList.styled';
import { ScoreBar } from 'components/ScoreBar/ScoreBar';
import noPoster from '../../images/no-poster.jpg';

export const MediaList = ({ media, mediaTypes }) => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
    const IMAGES_BASE_URL_RETINA =
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
    const data = normalizeMoviesData(media, mediaTypes);

    return (
        <StyledMedialist>
            {data.map(
                ({
                    id,
                    vote_average,
                    movie_title,
                    media_type,
                    poster_path,
                    release,
                }) => (
                    <StyledMediaCard key={id}>
                        <MovieLink
                            to={
                                media_type === 'movie'
                                    ? `/movies/movie-${id}`
                                    : `/tv-shows/tv-${id}`
                            }
                        >
                            <ImgWrapper>
                                <ScoreBar
                                    size={0.7}
                                    rating={vote_average}
                                    style={{
                                        position: 'absolute',
                                        top: 10,
                                        right: 10,
                                        zIndex: 1,
                                    }}
                                />
                                <picture>
                                    <source
                                        srcSet={
                                            poster_path
                                                ? `${
                                                      IMAGES_BASE_URL +
                                                      poster_path
                                                  } 1x, ${
                                                      IMAGES_BASE_URL_RETINA +
                                                      poster_path
                                                  } 2x`
                                                : noPoster
                                        }
                                    />
                                    <img
                                        src={
                                            poster_path
                                                ? `${
                                                      IMAGES_BASE_URL +
                                                      poster_path
                                                  }`
                                                : noPoster
                                        }
                                        alt={movie_title}
                                    />
                                </picture>
                            </ImgWrapper>
                            <CardInfo>
                                <MovieTitle>{movie_title}</MovieTitle>
                                <p>{release}</p>
                            </CardInfo>
                        </MovieLink>
                    </StyledMediaCard>
                )
            )}
        </StyledMedialist>
    );
};
