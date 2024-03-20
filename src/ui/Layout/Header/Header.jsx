import {
    CloseMenuBtn,
    HeaderStyled,
    Menu,
    Nav,
    NavLinkStyled,
    OpenMenuBtn,
    Toggler,
    Wrapper,
} from './Header.styled';
import { useEffect, useRef, useState } from 'react';
import sprite from '../../../images/sprite.svg';
import { Svg } from '../globalComponents/components/Svg/Svg';
import { BackDrop } from '../globalComponents/layouts/BackDrop/BackDrop';
import { Logo } from '../globalComponents/components/Logo/Logo';
import { storageLoad } from 'common/services/storage';
import { Container } from '../globalComponents/layouts/Container/Container';

export const Header = ({ onChangeTheme }) => {
    const [isOpen, setIsopen] = useState(false);

    const themeBtn = useRef(null);
    const observer = useRef(null);
    const containerRef = useRef(null);

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

    const hendleOpenMenu = () => {
        setIsopen(true);
    };

    const hendleCloseMenu = () => {
        setIsopen(false);
    };

    useEffect(() => {
        if (containerRef) {
            const content = containerRef.current;
            observer.current = new ResizeObserver(() => {
                setIsopen(false);
            });
            observer.current.observe(content);
        }
    }, []);

    return (
        <HeaderStyled>
            <Container reference={containerRef}>
                <Wrapper>
                    <Logo label="Home" dest={'/'} />
                    {isOpen && <BackDrop onClick={hendleCloseMenu} />}
                    <Menu isOpen={isOpen}>
                        <CloseMenuBtn
                            onClick={hendleCloseMenu}
                            type="button"
                            aria-label="close"
                        >
                            <Svg w={32} h={32} use={`${sprite}#icon-close`} />
                        </CloseMenuBtn>
                        <Nav>
                            <NavLinkStyled onClick={hendleCloseMenu} to={'/'}>
                                Home
                            </NavLinkStyled>
                            <NavLinkStyled
                                onClick={hendleCloseMenu}
                                to={'movies'}
                            >
                                Movies
                            </NavLinkStyled>
                            <NavLinkStyled
                                onClick={hendleCloseMenu}
                                to={'tv-shows'}
                            >
                                Tv
                            </NavLinkStyled>
                            <NavLinkStyled
                                onClick={hendleCloseMenu}
                                to={'person'}
                            >
                                People
                            </NavLinkStyled>
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
                    </Menu>
                    <OpenMenuBtn onClick={hendleOpenMenu}>
                        <Svg w={32} h={32} use={`${sprite}#icon-burger`} />
                    </OpenMenuBtn>
                </Wrapper>
            </Container>
        </HeaderStyled>
    );
};
