import {
    MovieInfoTitle,
    MovieInfoWrapper,
    MoviePoster,
    ScoreBox,
    ScoreBoxTitle,
    StyledLi,
    StyledLink,
    StyledList,
} from './CollectionList.styled';
import noPoster from '../../../assets/images/no-poster.jpg';
import { POSTER_W185 } from 'common/constants';
import { ScoreBar } from 'ui/shared/components/ScoreBar/ScoreBar';
import { useTranslate } from 'hooks/useTranslate';

export const CollectionList = ({ parts }) => {
    const { t } = useTranslate();

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
                                        <p>
                                            {t('releaseDate')}
                                            {release_date}
                                        </p>
                                    )}
                                    <ScoreBox>
                                        <ScoreBar
                                            size={0.6}
                                            rating={vote_average}
                                        />
                                        <ScoreBoxTitle>
                                            {t('score')}
                                        </ScoreBoxTitle>
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
