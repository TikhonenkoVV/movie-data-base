import {
    CastCard,
    CastLink,
    CastPoster,
    CastInfo,
    StyledCastList,
    ActorName,
    CastWrapper,
} from './CastList.styled';
import noPoster from '../../../../../images/no-poster.jpg';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { selectDevice } from 'common/store/selector';
import { Scrollbar } from 'ui/Layout/globalComponents/components/ScrollBar/ScrollBar';
import { PROFILE_W185 } from 'common/constants';

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
                                <CastLink to={`/persons/${id}`}>
                                    <CastPoster
                                        src={
                                            profile_path
                                                ? PROFILE_W185 + profile_path
                                                : noPoster
                                        }
                                        alt={personName}
                                    />
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
