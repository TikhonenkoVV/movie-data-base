import {
    CastWrapper,
    CastCard,
    CastLink,
    CastPoster,
    CastInfo,
    StyledCastList,
    ActorName,
} from './CastList.styled';

export const CastList = ({ cast }) => {
    const array = [];
    cast?.map((el, i) => {
        if (i < 10) return array.push(el);
        else return null;
    });
    return (
        <CastWrapper>
            <StyledCastList>
                {array?.map(({ id, castId, personName, poster, role }) => (
                    <CastCard key={castId}>
                        <CastLink to={`/person/${id}`}>
                            <CastPoster src={poster} alt={personName} />
                            <CastInfo>
                                <ActorName>{personName}</ActorName>
                                <p>{role}</p>
                            </CastInfo>
                        </CastLink>
                    </CastCard>
                ))}
            </StyledCastList>
        </CastWrapper>
    );
};