import {
    CardInfo,
    ImgWrapper,
    MovieLink,
    MovieTitle,
    StyledMediaCard,
    StyledMedialist,
} from './MediaList.styled';
import noPoster from '../../../../images/no-poster.jpg';
import { POSTER_W342 } from 'common/constants';
import { ScoreBar } from 'ui/Layout/globalComponents/components/ScoreBar/ScoreBar';
import { normalizeMoviesData } from 'common/services/normalize/normalizeMoviesData';

export const MediaList = ({ media, mediaTypes }) => {
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
                                <img
                                    src={
                                        poster_path
                                            ? `${POSTER_W342 + poster_path}`
                                            : noPoster
                                    }
                                    alt={movie_title}
                                />
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
