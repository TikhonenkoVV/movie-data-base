import styled from '@emotion/styled';
import { IMAGES_BASE_URL_W1280 } from 'common/constants';

export const HeroSection = styled.section`
    padding-bottom: 0;
`;

export const Filter = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.hover};
    @media ${({ theme }) => theme.breakpoints.xs} {
        width: ${({ theme }) => theme.sizes.xs};
    }
    @media ${({ theme }) => theme.breakpoints.s} {
        width: ${({ theme }) => theme.sizes.s};
    }
    @media ${({ theme }) => theme.breakpoints.m} {
        width: ${({ theme }) => theme.sizes.m};
    }
    @media ${({ theme }) => theme.breakpoints.l} {
        width: ${({ theme }) => theme.sizes.l};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        width: ${({ theme }) => theme.sizes.xl};
    }
    @media ${({ theme }) => theme.breakpoints.xxl} {
        width: ${({ theme }) => theme.sizes.xxl};
    }
`;

export const SloganBox = styled.div`
    position: absolute;
    left: 50px;
    bottom: 50px;
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: 700;
    margin-bottom: 24px;
`;

export const Description = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: 700;
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const HeroBackground = styled.div`
    position: relative;

    width: 100%;
    aspect-ratio: 3 / 1;

    opacity: 0.7;

    background-image: ${({ background }) =>
        "url('" + IMAGES_BASE_URL_W1280 + background + "')"};
    background-position: 0 -50px;
    background-repeat: no-repeat;
    background-size: cover;
    padding-left: ${({ theme }) => theme.spacing.retreatS};
    padding-right: ${({ theme }) => theme.spacing.retreatS};

    filter: grayscale(1);

    mix-blend-mode: soft-light;

    @media ${({ theme }) => theme.breakpoints.s} {
        padding-left: ${({ theme }) => theme.spacing.retreatM};
        padding-right: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        padding-left: ${({ theme }) => theme.spacing.retreatL};
        padding-right: ${({ theme }) => theme.spacing.retreatL};
    }
`;
