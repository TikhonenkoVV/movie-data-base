import { Container } from 'components/Container/Container';
import {
    Card,
    CastCrewWrapper,
    StyledLink,
    MinorTitle,
    MajorTitle,
    CardListItem,
    Poster,
    CreditsWrapper,
} from './FullCast.styled';
import { useEffect, useState } from 'react';
import { getDetails } from 'services/api';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { normalizeCast } from 'services/normalize/normalizeCast';
import noPoster from '../../images/no-poster_66.jpg';
import { normalizeCrew } from 'services/normalize/normalizeCrew';

export const FullCast = () => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w66_and_h66_face';
    const IMAGES_BASE_URL_RETINA =
        'https://image.tmdb.org/t/p/w132_and_h132_face';

    const { mediaId } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [castArray, setCastArray] = useState();
    const [crewArray, setCrewArray] = useState();

    useEffect(() => {
        setIsLoading(true);
        const type = mediaId.split('-')[0];
        const id = mediaId.split('-')[1];
        getDetails(
            type,
            id,
            type === 'movie' ? '/credits' : '/aggregate_credits'
        )
            .then(data => {
                setCastArray(normalizeCast(data.cast));
                setCrewArray(normalizeCrew(data.crew));
            })
            .catch(err => {
                setError(err.message);
                console.log('full cast', err);
            })
            .finally(() => setIsLoading(false));
    }, [mediaId]);

    return (
        <section className="padding-top">
            {isLoading && <Loader />}
            <Container>
                <CreditsWrapper>
                    <CastCrewWrapper>
                        <MinorTitle>Cast</MinorTitle>
                        <ul>
                            {castArray?.map(
                                ({
                                    id,
                                    castId,
                                    personName,
                                    profile_path,
                                    role,
                                }) => (
                                    <Card key={castId}>
                                        <StyledLink to={`/person/${id}`}>
                                            <picture>
                                                <source
                                                    srcSet={
                                                        profile_path
                                                            ? `${
                                                                  IMAGES_BASE_URL +
                                                                  profile_path
                                                              } 1x, ${
                                                                  IMAGES_BASE_URL_RETINA +
                                                                  profile_path
                                                              } 2x`
                                                            : noPoster
                                                    }
                                                />

                                                <Poster
                                                    src={
                                                        profile_path
                                                            ? IMAGES_BASE_URL +
                                                              profile_path
                                                            : noPoster
                                                    }
                                                    alt={personName}
                                                />
                                            </picture>
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
                            {crewArray?.crew?.map(el => (
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
                                                profile_path,
                                            }) => (
                                                <Card key={credit_id}>
                                                    <StyledLink
                                                        to={`/person/${id}`}
                                                    >
                                                        <picture>
                                                            <source
                                                                srcSet={
                                                                    profile_path
                                                                        ? `${
                                                                              IMAGES_BASE_URL +
                                                                              profile_path
                                                                          } 1x, ${
                                                                              IMAGES_BASE_URL_RETINA +
                                                                              profile_path
                                                                          } 2x`
                                                                        : noPoster
                                                                }
                                                            />

                                                            <Poster
                                                                src={
                                                                    profile_path
                                                                        ? IMAGES_BASE_URL +
                                                                          profile_path
                                                                        : noPoster
                                                                }
                                                                alt={personName}
                                                            />
                                                        </picture>
                                                        <div>
                                                            <h3>
                                                                {personName}
                                                            </h3>
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
                </CreditsWrapper>
            </Container>

            {/* ЗВЕРНИ УВАГУ!!! */}
            {error && <></>}
        </section>
    );
};
