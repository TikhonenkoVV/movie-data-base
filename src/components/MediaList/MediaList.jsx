import { Grid, GridItem } from 'components/App.styled';
import {
    CardOverlay,
    ImgWrapper,
    MovieLink,
    MovieTitle,
} from './MediaList.styled';
import { normalizeMoviesData } from 'services/normalize';
import { ScoreBar } from 'components/ScoreBar/ScoreBar';

export const MediaList = ({ media, mediaTypes }) => {
    const data = normalizeMoviesData(media, mediaTypes);

    return (
        <Grid>
            {data.map(
                ({
                    id,
                    vote_average,
                    movie_title,
                    media_type,
                    poster,
                    release,
                }) => (
                    <GridItem key={id}>
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
                            <CardOverlay className="js-overlay">
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
                            </CardOverlay>
                        </MovieLink>
                    </GridItem>
                )
            )}
        </Grid>
    );
};
