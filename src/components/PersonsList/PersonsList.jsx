import { Link } from 'react-router-dom';
import { normalizePersonsData } from 'services/normalize';
import {
    CardInfo,
    ImgWrapper,
    PersonTitle,
    StyledPersonCard,
    StyledPersonList,
} from './PersonsList.styled';

export const PersonsList = ({ persons }) => {
    const data = normalizePersonsData(persons);
    return (
        <StyledPersonList>
            {data.map(({ id, person_name, poster }) => (
                <StyledPersonCard key={id}>
                    <Link to={`/person/${id}`}>
                        <ImgWrapper>
                            <img src={poster} alt={person_name} />
                        </ImgWrapper>
                        <CardInfo>
                            <PersonTitle>{person_name}</PersonTitle>
                        </CardInfo>
                    </Link>
                </StyledPersonCard>
            ))}
        </StyledPersonList>
    );
};
