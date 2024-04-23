import {
    Description,
    ImageWrapper,
    Item,
    StyledLink,
    Title,
} from './CreditsItem.styled';
import noPoster from '../../../../../assets/images/no-poster.jpg';
import { POSTER_W185 } from 'common/constants';
import { useTranslate } from 'hooks/useTranslate';

export const CreditsItem = ({ credits }) => {
    const { t } = useTranslate();

    return credits?.map(
        ({
            id,
            credit_id,
            poster_path,
            movieTitle,
            personCharacter,
            releaseDate,
            media_type,
            vote_average,
        }) => (
            <Item key={credit_id}>
                <StyledLink
                    to={
                        media_type === 'movie'
                            ? `/movies/movie-${id}`
                            : `/tv-shows/tv-${id}`
                    }
                    state={{ mediaTypes: media_type }}
                >
                    <ImageWrapper>
                        <img
                            style={{
                                aspectRatio: '2/3',
                                objectFit: 'cover',
                            }}
                            width={70}
                            height={105}
                            src={
                                poster_path
                                    ? POSTER_W185 + poster_path
                                    : noPoster
                            }
                            alt={movieTitle}
                        />
                    </ImageWrapper>
                    <div>
                        <Title>{movieTitle}</Title>
                        {personCharacter && (
                            <Description>
                                {t('character')}: {personCharacter}
                            </Description>
                        )}
                        <Description>
                            {t('year')}: {releaseDate}
                        </Description>
                        <Description>
                            {t('score')}: {vote_average}
                        </Description>
                    </div>
                </StyledLink>
            </Item>
        )
    );
};
