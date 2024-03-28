import { Container } from 'ui/shared/layouts/Container/Container';
import { Description, HeroBackground, HeroSection, Title } from './Hero.styled';

export const Hero = ({ backgrounds }) => {
    const image =
        backgrounds && backgrounds[Math.floor(Math.random() * (20 - 1) + 1)];
    return (
        <HeroSection>
            <Container>
                <HeroBackground background={image}>
                    <Title>Welcome.</Title>
                    <Description>
                        Looking for a movie, TV show or person? We'll help.
                    </Description>
                </HeroBackground>
            </Container>
        </HeroSection>
    );
};
