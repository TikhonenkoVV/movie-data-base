import { Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { ButtonUp, MainStyled } from './Layout.styled';
import { useSelector } from 'react-redux';
import sprite from '../../images/sprite.svg';
import { selectDevice } from 'common/store/selector';
import { Svg } from './globalComponents/components/Svg/Svg';
import { Scrollbar } from './globalComponents/components/ScrollBar/ScrollBar';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

export const Layout = ({ onChangeTheme }) => {
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
