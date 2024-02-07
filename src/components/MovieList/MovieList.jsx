import { Grid, GridItem } from 'components/App.styled';
import { useLocation } from 'react-router-dom';
import {
    CardOverlay,
    Description,
    ImgWrapper,
    MovieLink,
    MovieTitle,
} from './MovieList.styled';
import { normalizeMoviesData } from 'services/normalize';
import { ScoreBar } from 'components/ScoreBar/ScoreBar';

export const MovieList = ({ movies, mediaTypes }) => {
    const location = useLocation();
    const data = normalizeMoviesData(movies, mediaTypes);
    return (
        <Grid>
            {data.map(
                ({ id, vote_average, movie_title, media_type, poster }) => (
                    <GridItem key={id}>
                        <ScoreBar
                            rating={vote_average}
                            style={{
                                position: 'absolute',
                                top: 10,
                                left: 10,
                                zIndex: 2,
                            }}
                        />
                        <MovieLink
                            to={`/movies/${media_type}/${id}`}
                            state={{ from: location }}
                        >
                            <ImgWrapper>
                                <img src={poster} alt={movie_title} />
                                <CardOverlay className="js-overlay">
                                    <MovieTitle>{movie_title}</MovieTitle>
                                    <Description>Сlick for details</Description>
                                </CardOverlay>
                            </ImgWrapper>
                        </MovieLink>
                    </GridItem>
                )
            )}
        </Grid>
    );
};
