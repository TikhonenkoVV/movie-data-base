import { Grid, GridItem } from 'components/App.styled';
import {
    CardOverlay,
    Description,
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
                            to={
                                media_type === 'movie'
                                    ? `/movies/${id}`
                                    : `/tv-shows/${id}`
                            }
                            state={{ mediaTypes: media_type }}
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
