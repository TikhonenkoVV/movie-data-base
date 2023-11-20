import {
    HeaderStyled,
    Logotype,
    Nav,
    NavLinkStyled,
    Toggler,
    Wrapper,
} from './Header.styled';
import { Container } from 'components/App.styled';
import { useRef } from 'react';
import { storageLoad } from 'services/storage';

export const Header = ({ onChangeTheme }) => {
    const themeBtn = useRef();

    const toggleTheme = () => {
        if (themeBtn.current.classList.contains('dark')) {
            themeBtn.current.classList.replace('dark', 'light');
            onChangeTheme('light');
            return;
        }
        if (themeBtn.current.classList.contains('light')) {
            themeBtn.current.classList.replace('light', 'dark');
            onChangeTheme('dark');
            return;
        }
    };

    return (
        <HeaderStyled>
            <Container>
                <Wrapper>
                    <Logotype aria-label="Home" to={'/'} />
                    <Nav>
                        <NavLinkStyled to={'/'}>Home</NavLinkStyled>
                        <NavLinkStyled to={'movies'}>Movies</NavLinkStyled>
                    </Nav>
                    <Toggler
                        ref={themeBtn}
                        className={
                            storageLoad('movieDBTheme')
                                ? storageLoad('movieDBTheme')
                                : 'dark'
                        }
                        onClick={toggleTheme}
                        aria-label="Theme"
                        type="button"
                    ></Toggler>
                </Wrapper>
            </Container>
        </HeaderStyled>
    );
};
