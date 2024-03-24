import { ImageWrapper, Item, StyledLink, Title } from './CreditsItem.styled';
import noPoster from '../../../../../../../images/no-poster.jpg';
import { POSTER_W185 } from 'common/constants';

export const CreditsItem = ({ credits }) => {
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
                        {personCharacter && <p>Character: {personCharacter}</p>}
                        <p>Year: {releaseDate}</p>
                        <p>User score: {vote_average}</p>
                    </div>
                </StyledLink>
            </Item>
        )
    );
};
