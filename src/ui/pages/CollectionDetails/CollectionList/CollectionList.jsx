import {
    MovieInfoTitle,
    MovieInfoWrapper,
    MoviePoster,
    ScoreBox,
    StyledLi,
    StyledLink,
    StyledList,
} from './CollectionList.styled';
import noPoster from '../../../assets/images/no-poster.jpg';
import { POSTER_W185 } from 'common/constants';
import { ScoreBar } from 'ui/shared/components/ScoreBar/ScoreBar';

export const CollectionList = ({ parts }) => {
    return (
        <StyledList>
            {parts?.map(
                ({ id, title, poster_path, release_date, vote_average }) => {
                    return (
                        <StyledLi key={id}>
                            <StyledLink to={`/movies/movie-${id}`}>
                                <MoviePoster
                                    src={
                                        poster_path
                                            ? POSTER_W185 + poster_path
                                            : noPoster
                                    }
                                    alt={title}
                                />
                                <MovieInfoWrapper>
                                    <MovieInfoTitle>{title}</MovieInfoTitle>
                                    {release_date && (
                                        <p>Release date: {release_date}</p>
                                    )}
                                    <ScoreBox>
                                        <ScoreBar
                                            size={0.6}
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
