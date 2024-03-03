import { Container } from 'components/Container/Container';
import { Card, StyledLink } from './FullCast.styled';

export const FullCast = ({ cast, crew }) => {
    return (
        <section>
            <Container style={{ display: 'flex', gap: '24px' }}>
                <div
                    style={{
                        flexBasis: 'calc((100% - 24px) / 2)',
                        border: '1px solid #808080',
                        padding: '16px',
                    }}
                >
                    <h2>Cast</h2>
                    <ul>
                        {cast?.map(
                            ({ id, castId, personName, smallPoster, role }) => (
                                <Card key={castId}>
                                    <StyledLink to={`/person/${id}`}>
                                        <img
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
                </div>
                <div
                    style={{
                        flexBasis: 'calc((100% - 24px) / 2)',
                        border: '1px solid #808080',
                        padding: '16px',
                    }}
                >
                    <h2>Crew</h2>
                    <ul>
                        {crew?.crew?.map(el => (
                            <li key={Object.keys(el)[0]}>
                                <h2 style={{ textTransform: 'capitalize' }}>
                                    {Object.keys(el)[0]}
                                </h2>
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
                                                    <img
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
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
};
