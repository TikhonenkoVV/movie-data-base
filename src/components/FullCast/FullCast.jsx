import { Container } from 'components/Container/Container';
import {
    Card,
    CastCrewWrapper,
    StyledLink,
    StyledSection,
    MinorTitle,
    MajorTitle,
    CardListItem,
    Poster,
} from './FullCast.styled';

export const FullCast = ({ cast, crew }) => {
    return (
        <StyledSection>
            <Container style={{ display: 'flex', gap: '24px' }}>
                <CastCrewWrapper>
                    <MinorTitle>Cast</MinorTitle>
                    <ul>
                        {cast?.map(
                            ({ id, castId, personName, smallPoster, role }) => (
                                <Card key={castId}>
                                    <StyledLink to={`/person/${id}`}>
                                        <Poster
                                            src={smallPoster}
                                            alt={personName}
                                        />
                                        <div>
                                            <h3>{personName}</h3>
                                            <p>{role}</p>
                                        </div>
                                    </StyledLink>
                                </Card>
                            )
                        )}
                    </ul>
                </CastCrewWrapper>
                <CastCrewWrapper>
                    <MinorTitle>Crew</MinorTitle>
                    <ul>
                        {crew?.crew?.map(el => (
                            <CardListItem key={Object.keys(el)[0]}>
                                <MajorTitle
                                    style={{ textTransform: 'capitalize' }}
                                >
                                    {Object.keys(el)[0]}
                                </MajorTitle>
                                <ul>
                                    {el[Object.keys(el)[0]]?.map(
                                        ({
                                            id,
                                            credit_id,
                                            job,
                                            personName,
                                            poster,
                                        }) => (
                                            <Card key={credit_id}>
                                                <StyledLink
                                                    to={`/person/${id}`}
                                                >
                                                    <Poster
                                                        src={poster}
                                                        alt={personName}
                                                    />
                                                    <div>
                                                        <h3>{personName}</h3>
                                                        <p>{job}</p>
                                                    </div>
                                                </StyledLink>
                                            </Card>
                                        )
                                    )}
                                </ul>
                            </CardListItem>
                        ))}
                    </ul>
                </CastCrewWrapper>
            </Container>
        </StyledSection>
    );
};
