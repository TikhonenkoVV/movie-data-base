import { Link } from 'react-router-dom';
import {
    DirectingCard,
    DirectingInfo,
    DirectingList,
    DirectingPoster,
    DirectingWrapper,
    DirectorName,
} from './CrewList.styled';
import noPoster from '../../images/no-poster_66.jpg';

export const CrewList = ({ crew }) => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w66_and_h66_face/';
    const IMAGES_BASE_URL_RETINA =
        'https://image.tmdb.org/t/p/w132_and_h132_face/';

    return (
        <DirectingWrapper>
            <DirectingList>
                {crew?.director?.map(
                    ({ id, credit_id, job, personName, profile_path }) => (
                        <DirectingCard key={credit_id}>
                            <Link to={`/person/${id}`}>
                                <DirectingPoster
                                    src={
                                        profile_path
                                            ? IMAGES_BASE_URL + profile_path
                                            : noPoster
                                    }
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
