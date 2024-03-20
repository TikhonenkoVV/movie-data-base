import { Link } from 'react-router-dom';
import {
    CardInfo,
    ImgWrapper,
    PersonTitle,
    StyledPersonCard,
    StyledPersonList,
} from './PersonsList.styled';
import noPoster from '../../../../../images/no-poster.jpg';

export const PersonsList = ({ persons }) => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
    const IMAGES_BASE_URL_RETINA =
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

    return (
        <StyledPersonList>
            {persons.map(({ id, name, profile_path }) => (
                <StyledPersonCard key={id}>
                    <Link to={`/person/${id}`}>
                        <ImgWrapper>
                            <picture>
                                <source
                                    srcSet={
                                        profile_path
                                            ? `${
                                                  IMAGES_BASE_URL + profile_path
                                              } 1x, ${
                                                  IMAGES_BASE_URL_RETINA +
                                                  profile_path
                                              } 2x`
                                            : noPoster
                                    }
                                />

                                <img
                                    src={
                                        profile_path
                                            ? IMAGES_BASE_URL + profile_path
                                            : noPoster
                                    }
                                    alt={name}
                                />
                            </picture>
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
