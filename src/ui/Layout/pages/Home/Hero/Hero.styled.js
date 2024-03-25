import styled from '@emotion/styled';
import { BACKDROP_W1280 } from 'common/constants';

export const HeroSection = styled.section`
    padding-bottom: 0;
`;

export const HeroBackground = styled.div`
    @media screen and (max-width: 349px) {
        aspect-ratio: 4/3;
    }
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 30px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.hover};

    aspect-ratio: 7 / 4;
    @media ${({ theme }) => theme.breakpoints.m} {
        aspect-ratio: 8 / 3;
        padding: 50px;
    }
    @media ${({ theme }) => theme.breakpoints.l} {
        aspect-ratio: 7 / 2;
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
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        filter: grayscale(1);
        mix-blend-mode: soft-light;
        @media ${({ theme }) => theme.breakpoints.xs} {
            background-position: auto 12%;
        }
    }
`;

export const Title = styled.h1`
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    @media ${({ theme }) => theme.breakpoints.xs} {
        font-size: ${({ theme }) => theme.fontSizes.xxxl};
    }
`;

export const Description = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 700;
    &:not(:last-child) {
        margin-bottom: 16px;
    }
    @media ${({ theme }) => theme.breakpoints.xs} {
        font-size: ${({ theme }) => theme.fontSizes.large};
    }
`;
