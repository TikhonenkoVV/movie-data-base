import { Link } from 'react-router-dom';
import {
    CardInfo,
    ImgWrapper,
    PersonTitle,
    StyledPersonCard,
    StyledPersonList,
} from './PersonsList.styled';
import noPoster from '../../../../../images/no-poster.jpg';
import { PROFILE_H632 } from 'common/constants';

export const PersonsList = ({ persons }) => {
    return (
        <StyledPersonList>
            {persons.map(({ id, name, profile_path }) => (
                <StyledPersonCard key={id}>
                    <Link to={`/persons/${id}`}>
                        <ImgWrapper>
                            <img
                                src={
                                    profile_path
                                        ? PROFILE_H632 + profile_path
                                        : noPoster
                                }
                                alt={name}
                            />
                        </ImgWrapper>
                        <CardInfo>
                            <PersonTitle>{name}</PersonTitle>
                        </CardInfo>
                    </Link>
                </StyledPersonCard>
            ))}
        </StyledPersonList>
    );
};
