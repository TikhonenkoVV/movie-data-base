import { useSelector } from 'react-redux';
import { Container } from 'ui/shared/layouts/Container/Container';
import { Description, HeroBackground, HeroSection, Title } from './Hero.styled';
import { selectDictionary } from 'common/store/selector';

export const Hero = ({ backgrounds }) => {
    const image =
        backgrounds && backgrounds[Math.floor(Math.random() * (20 - 1) + 1)];
    const { welcome, slogan } = useSelector(selectDictionary);

    return (
        <HeroSection>
            <Container>
                <HeroBackground background={image}>
                    <Title>{welcome}</Title>
                    <Description>{slogan}</Description>
                </HeroBackground>
            </Container>
        </HeroSection>
    );
};
