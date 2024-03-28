import styled from '@emotion/styled';
import noPoster from '../../../assets/images/no-poster-backdrop.jpg';
import { BACKDROP_W1280 } from 'common/constants';

export const CollectionWrapper = styled.div`
    @media ${({ theme }) => theme.breakpoints.xs} {
        display: grid;
        grid-template-columns: 140px auto;
        align-items: start;
        gap: 20px;
        padding: ${({ theme }) => theme.spacing.retreatM} 0;
        background-image: ${({ theme }) => theme.lg.movieInfo},
            url(${({ bgr }) => (bgr ? BACKDROP_W1280 + bgr : noPoster)});
        background-position: top;
        background-repeat: no-repeat;
        background-size: ${({ itemHeight, theme }) =>
            `auto calc(${itemHeight}px + ${theme.spacing.retreatM} + ${theme.spacing.retreatM})`};
        transition: background-color ${({ theme }) => theme.baseTransition};
    }
    @media ${({ theme }) => theme.breakpoints.s} {
        grid-template-columns: 230px auto;
        grid-template-rows: auto calc(
                100% - ${({ bgrHeight }) => bgrHeight}px - 20px
            );
        background-size: ${({ itemHeight, theme }) =>
            itemHeight < 385
                ? 'auto 385px'
                : `auto calc(${itemHeight}px + ${theme.spacing.retreatM} + ${theme.spacing.retreatM})`};
        transition: background-color ${({ theme }) => theme.baseTransition};
    }
    @media ${({ theme }) => theme.breakpoints.m} {
        background-position: center;
        background-size: cover;
    }
    @media ${({ theme }) => theme.breakpoints.l} {
        grid-template-columns: 300px auto;
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        padding: ${({ theme }) => theme.spacing.retreatL} 0;
    }
`;

export const PosterWrapper = styled.div`
    @media ${({ theme }) => theme.breakpoints.onlyXs} {
        background-image: ${({ theme }) => theme.lg.movieInfoOnlyS},
            url(${({ bgr }) => (bgr ? BACKDROP_W1280 + bgr : noPoster)});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 20px 0;
    }
    transition: background ${({ theme }) => theme.baseTransition};
    @media ${({ theme }) => theme.breakpoints.s} {
        flex-shrink: 0;
        margin: 0;
        padding: 0;
        background: none;
        height: auto;
    }
    @media ${({ theme }) => theme.breakpoints.onlyM} {
        margin-bottom: 20px;
    }
    @media ${({ theme }) => theme.breakpoints.m} {
        grid-row: span 2;
    }
`;

export const Poster = styled.img`
    object-fit: cover;
    aspect-ratio: 2 / 3;
    height: 210px;
    @media ${({ theme }) => theme.breakpoints.s} {
        width: 230px;
        height: auto;
        margin-right: auto;
    }
    @media ${({ theme }) => theme.breakpoints.l} {
        width: 300px;
    }
`;

export const CollectionInfoWrapper = styled.div`
    color: ${({ theme }) => theme.colors.themeText};
    transition: color ${({ theme }) => theme.baseTransition};
    @media ${({ theme }) => theme.breakpoints.onlyXs} {
        &:not(.end) {
            margin-bottom: 16px;
        }
    }
    &.end {
        @media ${({ theme }) => theme.breakpoints.xs} {
            grid-column: span 2;
        }
        @media ${({ theme }) => theme.breakpoints.m} {
            grid-column: span 1;
        }
    }
`;

export const TitleMinor = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    margin-bottom: 16px;
`;

export const ScoreBox = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`;

export const TitleMajor = styled.h2`
    margin-bottom: 8px;
`;

export const Description = styled.p`
    &:not(:last-child) {
        margin-bottom: 16px;
    }
`;
