import {
    FooterTitle,
    LeftLinks,
    LinksItem,
    LinksWrapper,
    RightLinks,
    StyledFooter,
    StyledLink,
} from './Footer.styled';
import sprite from '../../../assets/images/sprite.svg';
import { Container } from 'ui/shared/layouts/Container/Container';
import { Logo } from 'ui/shared/components/Logo/Logo';
import { Svg } from 'ui/shared/components/Svg/Svg';
import { useTranslate } from 'hooks/useTranslate';

export const Footer = () => {
    const { t } = useTranslate();
    return (
        <StyledFooter>
            <Container>
                <Logo newClass="footer-logo" label="Home" dest={'/'} />
                <LinksWrapper>
                    <LeftLinks>
                        <FooterTitle>{t('resource')}</FooterTitle>
                        <ul>
                            <LinksItem>
                                <a
                                    href="https://www.themoviedb.org/about"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    {t('about')}
                                </a>
                            </LinksItem>
                            <LinksItem>
                                <a
                                    href="https://www.themoviedb.org/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    {t('website')}
                                </a>
                            </LinksItem>
                            <LinksItem>
                                <a
                                    href="https://developer.themoviedb.org/docs/getting-started"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    {t('api')}
                                </a>
                            </LinksItem>
                        </ul>
                    </LeftLinks>
                    <RightLinks>
                        <FooterTitle>{t('development')}</FooterTitle>
                        <ul>
                            <LinksItem>
                                <a
                                    href="https://github.com/TikhonenkoVV/MovieDB"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    {t('front')}
                                </a>
                            </LinksItem>
                            <LinksItem>
                                <a
                                    href="https://github.com/TikhonenkoVV/MovieDB=rest-api"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    {t('back')}
                                </a>
                            </LinksItem>
                            <LinksItem>
                                <a
                                    href="https://github.com/TikhonenkoVV"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    {t('portfolio')}
                                </a>
                            </LinksItem>
                        </ul>
                    </RightLinks>
                </LinksWrapper>
                <StyledLink
                    href="https://github.com/TikhonenkoVV"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Svg w={20} h={20} use={`${sprite}#icon-github`} />
                    {t('developer')} 2024
                </StyledLink>
            </Container>
        </StyledFooter>
    );
};
