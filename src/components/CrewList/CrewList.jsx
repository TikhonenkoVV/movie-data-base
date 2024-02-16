import { Link } from 'react-router-dom';
import {
    DirectingCard,
    DirectingInfo,
    DirectingList,
    DirectingPoster,
    DirectingWrapper,
    DirectorName,
} from './CrewList.styled';

export const CrewList = ({ crew }) => {
    return (
        <DirectingWrapper>
            <DirectingList>
                {crew?.director?.map(
                    ({ id, credit_id, job, personName, poster }) => (
                        <DirectingCard key={credit_id}>
                            <Link to={`/person/${id}`}>
                                <DirectingPoster
                                    src={poster}
                                    alt={personName}
                                />
                                <DirectingInfo>
                                    <DirectorName>{personName}</DirectorName>
                                    <p>{job}</p>
                                </DirectingInfo>
                            </Link>
                        </DirectingCard>
                    )
                )}
            </DirectingList>
        </DirectingWrapper>
    );
};
