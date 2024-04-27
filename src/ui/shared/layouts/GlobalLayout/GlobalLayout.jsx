import { Global, ThemeProvider } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyles } from 'ui/assets/styles';
import sprite from '../../../assets/images/sprite.svg';
import { selectDevice } from 'common/store/selector';
import { Scrollbar } from 'ui/shared/components/ScrollBar/ScrollBar';
import { Header } from 'ui/shared/blocks/Header/Header';
import { ButtonUp, MainStyled } from './GlobalLayout.styled';
import { Footer } from 'ui/shared/blocks/Footer/Footer';
import { Svg } from 'ui/shared/components/Svg/Svg';
import { hendleRefreshUser } from 'common/store/auth/authOperations';
import { setTheme } from 'common/store/auth/authSlice';
import { useAppTheme } from 'hooks/useAppTheme';

export const GlobalLayout = () => {
    const { currentTheme } = useAppTheme();

    const device = useSelector(selectDevice);
    const dispatch = useDispatch();

    const [toTop, setToTop] = useState(false);
    const [retreatY, setRetreatY] = useState(false);

    const onChangeTheme = colors => {
        dispatch(setTheme(colors));
    };

    const scrollToTop = () => {
        setToTop(true);
    };

    const getRetreatY = value => {
        setRetreatY(value);
    };

    useEffect(() => {
        dispatch(hendleRefreshUser());
    }, [dispatch]);

    useEffect(() => {
        if (toTop) setToTop(false);
    }, [toTop]);

    return (
        <ThemeProvider theme={currentTheme}>
            <Global styles={GlobalStyles} />
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
        </ThemeProvider>
    );
};
