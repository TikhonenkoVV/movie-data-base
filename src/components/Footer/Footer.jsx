import { Container } from 'components/Container/Container';
import { Logo } from 'components/Logo/Logo';
import {
    FooterTitle,
    LeftLinks,
    LinksItem,
    LinksWrapper,
    RightLinks,
    StyledFooter,
} from './Footer.styled';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container style={{ paddingTop: '24px', paddingBottom: '24px' }}>
                <Logo newClass="footer-logo" label="Home" dest={'/'} />
                <LinksWrapper>
                    <LeftLinks>
                        <FooterTitle>Original resource</FooterTitle>
                        <ul>
                            <LinksItem>
                                <a
                                    href="https://www.themoviedb.org/about"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    About TMDB
                                </a>
                            </LinksItem>
                            <LinksItem>
                                <a
                                    href="https://www.themoviedb.org/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Original website
                                </a>
                            </LinksItem>
                            <LinksItem>
                                <a
                                    href="https://developer.themoviedb.org/docs/getting-started"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    API
                                </a>
                            </LinksItem>
                        </ul>
                    </LeftLinks>
                    <RightLinks>
                        <FooterTitle>Development</FooterTitle>
                        <ul>
                            <LinksItem>
                                <a
                                    href="https://github.com/TikhonenkoVV/MovieDB"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Front-End Repository
                                </a>
                            </LinksItem>
                            <LinksItem>
                                <a
                                    href="https://github.com/TikhonenkoVV/MovieDB=rest-api"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Back-End Repository
                                </a>
                            </LinksItem>
                            <LinksItem>
                                <a
                                    href="https://github.com/TikhonenkoVV"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    Portfolio
                                </a>
                            </LinksItem>
                        </ul>
                    </RightLinks>
                </LinksWrapper>
            </Container>
        </StyledFooter>
    );
};
