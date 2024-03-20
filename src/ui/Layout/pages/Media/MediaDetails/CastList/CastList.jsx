import {
    CastCard,
    CastLink,
    CastPoster,
    CastInfo,
    StyledCastList,
    ActorName,
    CastWrapper,
} from './CastList.styled';
import noPoster from '../../../../../../images/no-poster.jpg';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { selectDevice } from 'common/store/selector';
import { Scrollbar } from 'ui/Layout/globalComponents/components/ScrollBar/ScrollBar';

export const CastList = ({ cast }) => {
    const insideRef = useRef(null);
    const outsideRef = useRef(null);

    const device = useSelector(selectDevice);
    const [retreatX, setRetreatX] = useState(false);

    const getRetreatX = value => {
        if (value || value === 0) setRetreatX(value);
    };

    useEffect(() => {
        const { clientWidth: outsideWidth } = outsideRef.current;
        const { clientWidth: insideWidth } = insideRef.current;
        if (insideWidth <= outsideWidth) setRetreatX(1);
    }, []);

    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
    const IMAGES_BASE_URL_RETINA =
        'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

    const array = [];

    cast?.map((el, i) => {
        if (i < 10) return array.push(el);
        else return null;
    });

    return (
        <CastWrapper ref={outsideRef} curtain={retreatX > 0 ? false : true}>
            <Scrollbar
                orientation="x"
                device={device}
                getRetreatX={getRetreatX}
            >
                <StyledCastList ref={insideRef}>
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
