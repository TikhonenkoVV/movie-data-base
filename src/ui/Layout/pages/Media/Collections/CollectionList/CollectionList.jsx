import {
    MovieInfoTitle,
    MovieInfoWrapper,
    MoviePoster,
    PosterWrapper,
    ScoreBox,
    StyledLi,
    StyledLink,
    StyledList,
} from './CollectionList.styled';
import noPoster from '../../../../../../images/no-poster.jpg';
import { ScoreBar } from 'ui/Layout/globalComponents/components/ScoreBar/ScoreBar';

export const CollectionList = ({ parts }) => {
    if (parts) console.log(parts);
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200';
    const IMAGES_BASE_URL_RETINA = 'https://image.tmdb.org/t/p/w400';

    return (
        <StyledList>
            {parts?.map(
                ({ id, title, poster_path, release_date, vote_average }) => {
                    return (
                        <StyledLi key={id}>
                            <StyledLink to={`/movies/movie-${id}`}>
                                <PosterWrapper>
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

                                    <MoviePoster
                                        src={
                                            poster_path
                                                ? IMAGES_BASE_URL + poster_path
                                                : noPoster
                                        }
                                        alt={title}
                                    />
                                </PosterWrapper>
                                <MovieInfoWrapper>
                                    <MovieInfoTitle>{title}</MovieInfoTitle>
                                    {release_date && (
                                        <p>Release date: {release_date}</p>
                                    )}
                                    <ScoreBox>
                                        <ScoreBar
                                            size={0.8}
                                            rating={vote_average}
                                        />
                                        <h3>User Score</h3>
                                    </ScoreBox>
                                </MovieInfoWrapper>
                            </StyledLink>
                        </StyledLi>
                    );
                }
            )}
        </StyledList>
    );
};
