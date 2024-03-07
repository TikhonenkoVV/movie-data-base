import { Scrollbar } from 'components/ScrollBar/ScrollBar';
import {
    CastCard,
    CastLink,
    CastPoster,
    CastInfo,
    StyledCastList,
    ActorName,
    CastWrapper,
} from './CastList.styled';
import noPoster from '../../images/no-poster.jpg';

export const CastList = ({ cast }) => {
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
    const IMAGES_BASE_URL_RETINA =
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
    const array = [];
    cast?.map((el, i) => {
        if (i < 10) return array.push(el);
        else return null;
    });
    return (
        <CastWrapper>
            <Scrollbar orientation="x">
                <StyledCastList>
                    {array?.map(
                        ({ id, castId, personName, profile_path, role }) => (
                            <CastCard key={castId}>
                                <CastLink to={`/person/${id}`}>
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

                                        <CastPoster
                                            src={
                                                profile_path
                                                    ? IMAGES_BASE_URL +
                                                      profile_path
                                                    : noPoster
                                            }
                                            alt={personName}
                                        />
                                    </picture>
                                    <CastInfo>
                                        <ActorName>{personName}</ActorName>
                                        <p>{role}</p>
                                    </CastInfo>
                                </CastLink>
                            </CastCard>
                        )
                    )}
                </StyledCastList>
            </Scrollbar>
        </CastWrapper>
    );
};
