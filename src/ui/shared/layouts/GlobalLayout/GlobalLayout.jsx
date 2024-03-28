import { Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import sprite from '../../../assets/images/sprite.svg';
import { selectDevice } from 'common/store/selector';
import { Scrollbar } from 'ui/shared/components/ScrollBar/ScrollBar';
import { Header } from 'ui/shared/blocks/Header/Header';
import { ButtonUp, MainStyled } from './GlobalLayout.styled';
import { Footer } from 'ui/shared/blocks/Footer/Footer';
import { Svg } from 'ui/shared/components/Svg/Svg';

export const GlobalLayout = ({ onChangeTheme }) => {
    const device = useSelector(selectDevice);
    const [toTop, setToTop] = useState(false);
    const [retreatY, setRetreatY] = useState(false);

    const scrollToTop = () => {
        setToTop(true);
    };

    const getRetreatY = value => {
        setRetreatY(value);
    };

    useEffect(() => {
        if (toTop) setToTop(false);
    }, [toTop]);

    return (
        <Scrollbar
            orientation="y"
            device={device}
            toTop={toTop}
            getRetreatY={getRetreatY}
        >
            <Header onChangeTheme={onChangeTheme} />
            <MainStyled>
                <Suspense>
                    <Outlet />
                </Suspense>
            </MainStyled>
            <Footer />
            <ButtonUp onClick={scrollToTop} isHidden={retreatY < 400}>
                <Svg w={50} h={50} use={`${sprite}#icon-arrow`} />
            </ButtonUp>
        </Scrollbar>
    );
};
