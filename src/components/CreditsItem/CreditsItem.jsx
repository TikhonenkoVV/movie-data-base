import { useLocation } from 'react-router-dom';
import { ImageWrapper, Item, StyledLink, Title } from './CreditsItem.styled';

export const CreditsItem = ({ credits }) => {
    const location = useLocation();

    return credits?.map(
        ({
            id,
            credit_id,
            poster,
            movieTitle,
            personCharacter,
            releaseDate,
            media_type,
        }) => (
            <Item key={credit_id}>
                <StyledLink
                    to={`/movies/${media_type}/${id}`}
                    state={{ from: location }}
                >
                    <ImageWrapper>
                        <img
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            width={50}
                            height={75}
                            src={poster}
                            alt={movieTitle}
                        />
                    </ImageWrapper>
                    <div>
                        <Title>{movieTitle}</Title>
                        {personCharacter && <p>Character: {personCharacter}</p>}
                        <p>Year: {releaseDate}</p>
                    </div>
                </StyledLink>
            </Item>
        )
    );
};
