import {
    Description,
    Filter,
    HeroBackground,
    HeroSection,
    SloganBox,
    Title,
} from './Hero.styled';

export const Hero = ({ backgrounds }) => {
    const image =
        backgrounds && backgrounds[Math.floor(Math.random() * (20 - 1) + 1)];
    return (
        <HeroSection>
            <Filter>
                <SloganBox>
                    <Title>Welcome.</Title>
                    <Description>
                        Looking for a movie, TV show or person? We'll help.
                    </Description>
                </SloganBox>
                <HeroBackground background={image}></HeroBackground>
            </Filter>
        </HeroSection>
    );
};
