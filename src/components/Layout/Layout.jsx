import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { MainStyled } from './Layout.styled';

export const Layout = ({ onChangeTheme }) => {
    return (
        <>
            <Header onChangeTheme={onChangeTheme} />
            <MainStyled>
                <Suspense>
                    <Outlet />
                </Suspense>
            </MainStyled>
        </>
    );
};
