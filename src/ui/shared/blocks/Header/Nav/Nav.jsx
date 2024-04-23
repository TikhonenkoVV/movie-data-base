import { NavLinkStyled, NavStyled } from './Nav.styled';
import { useTranslate } from 'hooks/useTranslate';

export const Nav = ({ onClose }) => {
    const { t } = useTranslate();

    return (
        <NavStyled>
            <NavLinkStyled onClick={onClose} to={'/'}>
                {t('home')}
            </NavLinkStyled>
            <NavLinkStyled onClick={onClose} to={'movies'}>
                {t('movies')}
            </NavLinkStyled>
            <NavLinkStyled onClick={onClose} to={'tv-shows'}>
                {t('tv')}
            </NavLinkStyled>
            <NavLinkStyled onClick={onClose} to={'persons'}>
                {t('persons')}
            </NavLinkStyled>
        </NavStyled>
    );
};
