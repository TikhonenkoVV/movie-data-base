import {
    CardInfo,
    ImgWrapper,
    MovieLink,
    MovieTitle,
    StyledMediaCard,
    StyledMedialist,
} from './MediaList.styled';
import { normalizeMoviesData } from 'services/normalize';
import { ScoreBar } from 'components/ScoreBar/ScoreBar';

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
                    poster,
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
                                <img src={poster} alt={movie_title} />
                            </ImgWrapper>
                            <CardInfo>
                                <ScoreBar
                                    rating={vote_average}
                                    style={{
                                        position: 'absolute',
                                        top: 10,
                                        left: 10,
                                        zIndex: 2,
                                    }}
                                />
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
