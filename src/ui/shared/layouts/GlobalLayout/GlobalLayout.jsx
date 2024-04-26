import { Global, ThemeProvider } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'ui/assets/styles';
import sprite from '../../../assets/images/sprite.svg';
import {
    selectDevice,
    selectLang,
    selectTheme,
    selectVerifiedUser,
} from 'common/store/selector';
import { Scrollbar } from 'ui/shared/components/ScrollBar/ScrollBar';
import { Header } from 'ui/shared/blocks/Header/Header';
import { ButtonUp, MainStyled } from './GlobalLayout.styled';
import { Footer } from 'ui/shared/blocks/Footer/Footer';
import { Svg } from 'ui/shared/components/Svg/Svg';
import { hendleRefreshUser } from 'common/store/auth/authOperations';
import { setLang, setTheme } from 'common/store/auth/authSlice';

const isDarkMode = window?.matchMedia('(prefers-color-scheme: dark)').matches;

export const GlobalLayout = () => {
    const device = useSelector(selectDevice);
    const verifiedUser = useSelector(selectVerifiedUser);
    const currentColor = useSelector(selectTheme);
    const lang = useSelector(selectLang);
    const dispatch = useDispatch();

    const [toTop, setToTop] = useState(false);
    const [retreatY, setRetreatY] = useState(false);
    const [currentTheme, setCurrentTheme] = useState({
        ...theme,
        ...darkTheme,
    });

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
        console.log(isDarkMode);
    }, [dispatch]);

    useEffect(() => {
        if (toTop) setToTop(false);
    }, [toTop]);

    useEffect(() => {
        if (!verifiedUser) {
            const defaultBrouserLanguage = navigator.language;
            if (!currentColor) {
                dispatch(setTheme(isDarkMode ? 'dark' : 'light'));
            }
            if (currentColor === 'dark') {
                setCurrentTheme({
                    ...theme,
                    ...darkTheme,
                });
            }
            if (currentColor === 'light') {
                setCurrentTheme({
                    ...theme,
                    ...lightTheme,
                });
            }
            if (!lang) {
                if (
                    defaultBrouserLanguage === 'uk-UA' ||
                    defaultBrouserLanguage === 'ru-UA'
                ) {
                    dispatch(setLang('uk-UA'));
                } else dispatch(setLang('en-US'));
            }
        }
    }, [verifiedUser, dispatch, currentColor, lang]);

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
