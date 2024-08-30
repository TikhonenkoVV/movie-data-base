import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from 'common/store/selector';
import {
    BtnSearch,
    CloseMenuBtn,
    HeaderStyled,
    LoginButton,
    Menu,
    OpenMenuBtn,
    ThemeToggler,
    TogglerBox,
    Wrapper,
} from './Header.styled';
import { Container } from 'ui/shared/layouts/Container/Container';
import { SearchForm } from './SearchForm/SearchForm';
import { Logo } from 'ui/shared/components/Logo/Logo';
import { Svg } from 'ui/shared/components/Svg/Svg';
import { BackDrop } from 'ui/shared/layouts/BackDrop/BackDrop';
import sprite from '../../../assets/images/sprite.svg';
import { Nav } from './Nav/Nav';
import { useTranslate } from 'hooks/useTranslate';
import { LangToggler } from './components/LangToggler/LangToggler';

export const Header = ({ onChangeTheme }) => {
    const { t } = useTranslate();
    const currentColor = useSelector(selectTheme);

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
                        <Nav onClose={hendleCloseMenu} />
                        <TogglerBox>
                            <LangToggler />
                            <ThemeToggler
                                ref={themeBtn}
                                className={currentColor}
                                onClick={toggleTheme}
                                aria-label="Theme"
                                type="button"
                            >
                                <Svg
                                    w={20}
                                    h={20}
                                    use={`${sprite}#icon-moon`}
                                />
                                <Svg w={20} h={20} use={`${sprite}#icon-sun`} />
                            </ThemeToggler>
                            <LoginButton to={'auth/signin'}>
                                {t('login')}
                            </LoginButton>
                        </TogglerBox>
                    </Menu>
                    <BtnSearch ref={searchButton} onClick={toggleSearchPanel}>
                        <Svg w={18} h={18} use={`${sprite}#icon-search`} />
                    </BtnSearch>
                    <OpenMenuBtn onClick={hendleOpenMenu}>
                        <Svg w={32} h={32} use={`${sprite}#icon-burger`} />
                    </OpenMenuBtn>
                </Wrapper>
            </Container>
        </HeaderStyled>
    );
};
