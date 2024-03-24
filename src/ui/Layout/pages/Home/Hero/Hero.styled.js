import styled from '@emotion/styled';
import { BACKDROP_W1280 } from 'common/constants';

export const HeroSection = styled.section`
    padding-bottom: 0;
`;

export const HeroBackground = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 50px;
    aspect-ratio: 3.6 / 1;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.hover};

    @media ${({ theme }) => theme.breakpoints.s} {
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
    }
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        opacity: 0.7;
        background-image: ${({ background }) =>
            "url('" + BACKDROP_W1280 + background + "')"};
        background-position: 0 12%;
        background-repeat: no-repeat;
        background-size: cover;
        filter: grayscale(1);
        mix-blend-mode: soft-light;
    }
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: 700;
`;

export const Description = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: 700;
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;
