import { Container } from 'ui/shared/layouts/Container/Container';
import { Description, HeroBackground, HeroSection, Title } from './Hero.styled';
import { useTranslate } from 'hooks/useTranslate';

export const Hero = ({ backgrounds }) => {
    const { t } = useTranslate();
    const image =
        backgrounds && backgrounds[Math.floor(Math.random() * (20 - 1) + 1)];

    return (
        <HeroSection>
            <Container>
                <HeroBackground background={image}>
                    <Title>{t('welcome')}</Title>
                    <Description>{t('slogan')}</Description>
                </HeroBackground>
            </Container>
        </HeroSection>
    );
};
