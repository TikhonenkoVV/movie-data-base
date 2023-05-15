import styled from '@emotion/styled';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

export const MovieWrapper = styled.div`
    padding: 30px 0;
    background-image: linear-gradient(
            90deg,
            #404040 3%,
            #404040de 23%,
            #404040de 77%,
            #404040 100%
        ),
        url(${props => IMAGES_BASE_URL + props.bgr});
    background-repeat: no-repeat;
    background-size: cover;
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
        display: flex;
    }
`;

export const MovieInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 20px 0 0 0;
    color: white;
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
        padding: 0 0 0 20px;
    }
    @media (min-width: ${props => props.theme.breakpoints.s}) {
        gap: 20px;
    }
`;

export const Poster = styled.img`
    flex-shrink: 0;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
        min-width: 30%;
        margin: 0;
    }
`;

export const ScoreBox = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
