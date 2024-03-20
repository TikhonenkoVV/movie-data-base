import styled from '@emotion/styled';

export const StyledSection = styled.section`
    color: ${({ theme }) => theme.colors.themeText};
    background-color: ${({ theme }) => theme.colors.mediumBackground};
`;

export const MovieWrapper = styled.div`
    text-align: center;
    @media ${({ theme }) => theme.breakpoints.xs} {
        display: flex;
        gap: 20px;
        text-align: left;
    }
`;

export const PosterWrapper = styled.picture`
    display: block;
    width: 100px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 16px;
    @media ${({ theme }) => theme.breakpoints.xs} {
        width: auto;
        margin-bottom: 0;
        margin-left: 0;
        margin-right: 0;
    }
`;

export const MoviePoster = styled.img`
    width: 100px;
    object-fit: cover;
    aspect-ratio: 2 / 3;
`;

export const MovieInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    color: ${({ theme }) => theme.colors.themeText};
    transition: color ${({ theme }) => theme.baseTransition};
    @media ${({ theme }) => theme.breakpoints.m} {
        gap: 20px;
    }
`;

export const MovieInfoTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
`;
