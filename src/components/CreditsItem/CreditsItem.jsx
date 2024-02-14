import { ImageWrapper, Item, StyledLink, Title } from './CreditsItem.styled';

export const CreditsItem = ({ credits }) => {
    return credits?.map(
        ({
            id,
            credit_id,
            poster,
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
                            ? `/movies/${id}`
                            : `/tv-shows/${id}`
                    }
                    state={{ mediaTypes: media_type }}
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
                        <p>User score: {vote_average}</p>
                    </div>
                </StyledLink>
            </Item>
        )
    );
};
