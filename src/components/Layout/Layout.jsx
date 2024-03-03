import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { MainStyled } from './Layout.styled';
import { Footer } from 'components/Footer/Footer';
import { Scrollbar } from 'components/ScrollBar/ScrollBar';

export const Layout = ({ onChangeTheme }) => {
    return (
        <Scrollbar orientation="y">
            <Header onChangeTheme={onChangeTheme} />
            <MainStyled>
                <Suspense>
                    <Outlet />
                </Suspense>
            </MainStyled>
            <Footer />
        </Scrollbar>
    );
};
