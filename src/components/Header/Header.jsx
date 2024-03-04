import { Container } from 'components/Container/Container';
import {
    HeaderStyled,
    Nav,
    NavLinkStyled,
    Toggler,
    Wrapper,
} from './Header.styled';
import { useRef } from 'react';
import { storageLoad } from 'services/storage';
import { Logo } from 'components/Logo/Logo';

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
                    <Logo label="Home" dest={'/'} />
                    <Nav>
                        <NavLinkStyled to={'/'}>Home</NavLinkStyled>
                        <NavLinkStyled to={'movies'}>Movies</NavLinkStyled>
                        <NavLinkStyled to={'tv-shows'}>Tv</NavLinkStyled>
                        <NavLinkStyled to={'person'}>People</NavLinkStyled>
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
