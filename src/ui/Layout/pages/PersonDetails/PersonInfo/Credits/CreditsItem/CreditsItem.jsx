import { ImageWrapper, Item, StyledLink, Title } from './CreditsItem.styled';
import noPoster from '../../../../../../../images/no-poster.jpg';

export const CreditsItem = ({ credits }) => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200';
    const IMAGES_BASE_URL_RETINA = 'https://image.tmdb.org/t/p/w400';

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
                        <picture>
                            <source
                                srcSet={
                                    poster_path
                                        ? `${
                                              IMAGES_BASE_URL + poster_path
                                          } 1x, ${
                                              IMAGES_BASE_URL_RETINA +
                                              poster_path
                                          } 2x`
                                        : noPoster
                                }
                            />

                            <img
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                                width={50}
                                height={75}
                                src={
                                    poster_path
                                        ? IMAGES_BASE_URL + poster_path
                                        : noPoster
                                }
                                alt={movieTitle}
                            />
                        </picture>
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
