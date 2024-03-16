import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { ButtonUp, MainStyled } from './Layout.styled';
import { Footer } from 'components/Footer/Footer';
import { Scrollbar } from 'components/ScrollBar/ScrollBar';
import { useSelector } from 'react-redux';
import { selectDevice } from 'store/selector';
import { Svg } from 'components/Svg/Svg';
import sprite from '../../images/sprite.svg';

export const Layout = ({ onChangeTheme }) => {
    const device = useSelector(selectDevice);
    const [toTop, setToTop] = useState(false);

    const scrollToTop = () => {
        setToTop(true);
    };

    useEffect(() => {
        setToTop(false);
    }, [toTop]);

    return (
        <Scrollbar orientation="y" device={device} toTop={toTop}>
            <Header onChangeTheme={onChangeTheme} />
            <MainStyled>
                <Suspense>
                    <Outlet />
                </Suspense>
            </MainStyled>
            <Footer />
            <ButtonUp onClick={scrollToTop} device={device}>
                <Svg w={50} h={50} use={`${sprite}#icon-arrow`} />
            </ButtonUp>
        </Scrollbar>
    );
};
