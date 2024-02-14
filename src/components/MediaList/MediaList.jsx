import { Grid, GridItem } from 'components/App.styled';
import {
    CardOverlay,
    ImgWrapper,
    MovieLink,
    MovieTitle,
} from './MediaList.styled';
import { normalizeMoviesData } from 'services/normalize';
import { ScoreBar } from 'components/ScoreBar/ScoreBar';
import { useLocation } from 'react-router-dom';

export const MediaList = ({ media, mediaTypes }) => {
    const data = normalizeMoviesData(media, mediaTypes);
    const location = useLocation();

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
                                    ? `/movies/${id}`
                                    : `/tv-shows/${id}`
                            }
                            state={{ mediaTypes: media_type, from: location }}
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
