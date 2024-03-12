import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { MainStyled } from './Layout.styled';
import { Footer } from 'components/Footer/Footer';
import { Scrollbar } from 'components/ScrollBar/ScrollBar';
import { useSelector } from 'react-redux';
import { selectDevice } from 'store/selector';

export const Layout = ({ onChangeTheme }) => {
    const device = useSelector(selectDevice);

    return (
        <Scrollbar orientation="y" device={device}>
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
