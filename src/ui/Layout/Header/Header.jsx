import {
    BtnSearch,
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
import sprite from '../../images/sprite.svg';
import { Svg } from '../globalComponents/components/Svg/Svg';
import { BackDrop } from '../globalComponents/layouts/BackDrop/BackDrop';
import { Logo } from '../globalComponents/components/Logo/Logo';
import { storageLoad } from 'common/services/storage';
import { Container } from '../globalComponents/layouts/Container/Container';
import { SearchForm } from '../SearchForm/SearchForm';

export const Header = ({ onChangeTheme }) => {
    const searchPanelRef = useRef(null);
    const searchButton = useRef(null);
    const themeBtn = useRef(null);
    const observer = useRef(null);
    const containerRef = useRef(null);
    const inputRef = useRef(null);
    const submitRef = useRef(null);
    const clearRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState('true');

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

    const toggleSearchPanel = () => {
        setIsHidden(isHidden === 'false' ? 'true' : 'false');
    };

    const hendleOpenMenu = () => {
        setIsOpen(true);
    };

    const hendleCloseMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (containerRef) {
            const content = containerRef.current;
            observer.current = new ResizeObserver(() => {
                setIsOpen(false);
            });
            observer.current.observe(content);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    const handleClick = e => {
        if (
            e.target === searchPanelRef.current ||
            e.target === inputRef.current ||
            e.target === searchButton.current ||
            e.target === submitRef.current ||
            e.target === clearRef.current
        ) {
            return;
        }
        setIsHidden('true');
    };
    return (
        <HeaderStyled>
            <SearchForm
                formRef={{
                    searchPanelRef,
                    inputRef,
                    submitRef,
                    clearRef,
                }}
                ariaHidden={isHidden}
            />
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
                                to={'persons'}
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
                    <BtnSearch ref={searchButton} onClick={toggleSearchPanel}>
                        <Svg w={20} h={20} use={`${sprite}#icon-search`} />
                    </BtnSearch>
                    <OpenMenuBtn onClick={hendleOpenMenu}>
                        <Svg w={32} h={32} use={`${sprite}#icon-burger`} />
                    </OpenMenuBtn>
                </Wrapper>
            </Container>
        </HeaderStyled>
    );
};
