import {
    CardInfo,
    ImgWrapper,
    MovieLink,
    MovieTitle,
    Release,
    Score,
    ScoreBarBox,
    StyledMediaCard,
    StyledMedialist,
} from './MediaList.styled';
import noPoster from '../../../assets/images/no-poster.jpg';
import { POSTER_W342 } from 'common/constants';
import { normalizeMoviesData } from 'common/services/normalize/normalizeMoviesData';
import { ScoreBar } from '../ScoreBar/ScoreBar';

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
                                    : media_type === 'tv'
                                    ? `/tv-shows/tv-${id}`
                                    : `/movies/collections/collection-${id}`
                            }
                        >
                            <ScoreBarBox>
                                <ScoreBar size={0.7} rating={vote_average} />
                            </ScoreBarBox>
                            <ImgWrapper>
                                <img
                                    width={80}
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
                                <Release>{release}</Release>
                                <Score>
                                    User score:{' '}
                                    {vote_average === 'NR'
                                        ? vote_average
                                        : `${vote_average} %`}
                                </Score>
                            </CardInfo>
                        </MovieLink>
                    </StyledMediaCard>
                )
            )}
        </StyledMedialist>
    );
};
