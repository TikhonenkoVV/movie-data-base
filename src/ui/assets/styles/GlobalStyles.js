import { css } from '@emotion/react';
import { theme } from './theme';

import eotRalewayRegular from '../fonts/Raleway-Regular.eot';
import eotRalewayMedium from '../fonts/Raleway-Medium.eot';
import eotRalewayBold from '../fonts/Raleway-Bold.eot';

import woff2RalewayRegular from '../fonts/Raleway-Regular.woff2';
import woff2RalewayMedium from '../fonts/Raleway-Medium.woff2';
import woff2RalewayBold from '../fonts/Raleway-Bold.woff2';

import woffRalewayRegular from '../fonts/Raleway-Regular.woff';
import woffRalewayMedium from '../fonts/Raleway-Medium.woff';
import woffRalewayBold from '../fonts/Raleway-Bold.woff';

import svgRalewayRegular from '../fonts/Raleway-Regular.svg';
import svgRalewayMedium from '../fonts/Raleway-Medium.svg';
import svgRalewayBold from '../fonts/Raleway-Bold.svg';

import ttfRalewayRegular from '../fonts/Raleway-Regular.ttf';
import ttfRalewayMedium from '../fonts/Raleway-Medium.ttf';
import ttfRalewayBold from '../fonts/Raleway-Bold.ttf';

export const GlobalStyles = css`
    @font-face {
        font-family: 'Raleway';
        src: url('${eotRalewayRegular}');
        src: url('${eotRalewayRegular}?#iefix') format('embedded-opentype'),
            url('${ttfRalewayRegular}') format('truetype'),
            url('${woff2RalewayRegular}') format('woff2'),
            url('${woffRalewayRegular}') format('woff'),
            url('${svgRalewayRegular}#Raleway-Regular') format('svg');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Raleway';
        src: url('${eotRalewayMedium}');
        src: url('${eotRalewayMedium}?#iefix') format('embedded-opentype'),
            url('${ttfRalewayMedium}') format('truetype'),
            url('${woff2RalewayMedium}') format('woff2'),
            url('${woffRalewayMedium}') format('woff'),
            url('${svgRalewayMedium}#Raleway-Medium') format('svg');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Raleway';
        src: url('${eotRalewayBold}');
        src: url('${eotRalewayBold}?#iefix') format('embedded-opentype'),
            url('${ttfRalewayBold}') format('truetype'),
            url('${woff2RalewayBold}') format('woff2'),
            url('${woffRalewayBold}') format('woff'),
            url('${svgRalewayBold}#Raleway-Bold') format('svg');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        font-family: 'Raleway', sans-serif;
        min-height: 100vh;

        font-style: normal;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        overflow: auto;
        height: 100vh;
    }

    section {
        padding-bottom: ${theme.spacing.retreatS};
        @media ${theme.breakpoints.s} {
            padding-bottom: ${theme.spacing.retreatM};
        }
        @media ${theme.breakpoints.xl} {
            padding-bottom: ${theme.spacing.retreatL};
        }
        &.padding-top {
            padding-top: ${theme.spacing.retreatS};
            @media ${theme.breakpoints.s} {
                padding-top: ${theme.spacing.retreatM};
            }
            @media ${theme.breakpoints.xl} {
                padding-top: ${theme.spacing.retreatL};
            }
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
        padding: 0;
    }

    ul,
    ol {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    button {
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`;
