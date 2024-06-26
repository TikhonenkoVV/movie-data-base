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
import { useParams } from 'react-router-dom';
import noPoster from '../../assets/images/no-poster_66.jpg';
import { getDetails } from 'common/services/api';
import { normalizeCast } from 'common/services/normalize/normalizeCast';
import { normalizeCrew } from 'common/services/normalize/normalizeCrew';
import { PROFILE_W185 } from 'common/constants';
import { Loader } from 'ui/shared/components/Loader';
import { useSelector } from 'react-redux';
import { selectLang } from 'common/store/selector';
import { useTranslate } from 'hooks/useTranslate';

const FullCast = () => {
    const language = useSelector(selectLang);
    const { t } = useTranslate();

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
            language,
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
    }, [mediaId, language]);

    return (
        <>
            {isLoading && <Loader />}
            <CreditsWrapper>
                {castArray?.length > 0 && (
                    <CastCrewWrapper>
                        <MinorTitle>{t('cast')}</MinorTitle>
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
                                        <StyledLink to={`/persons/${id}`}>
                                            <Poster
                                                width={66}
                                                src={
                                                    profile_path
                                                        ? PROFILE_W185 +
                                                          profile_path
                                                        : noPoster
                                                }
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
                )}
                {crewArray?.crew?.length > 0 && (
                    <CastCrewWrapper>
                        <MinorTitle>{t('crew_a')}</MinorTitle>
                        <ul>
                            {crewArray?.crew?.map(el => (
                                <CardListItem key={Object.keys(el)[0]}>
                                    <MajorTitle>
                                        {t(Object.keys(el)[0].toLowerCase())}
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
                                                        to={`/persons/${id}`}
                                                    >
                                                        <Poster
                                                            width={66}
                                                            src={
                                                                profile_path
                                                                    ? PROFILE_W185 +
                                                                      profile_path
                                                                    : noPoster
                                                            }
                                                            alt={personName}
                                                        />
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
                )}
            </CreditsWrapper>
            {error && <p>{error}</p>}
        </>
    );
};

export default FullCast;
