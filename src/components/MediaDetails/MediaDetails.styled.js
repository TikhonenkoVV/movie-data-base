import styled from '@emotion/styled';

export const StyledSection = styled.section`
    padding-top: 24px;
    color: ${({ theme }) => theme.colors.themeText};
    background-color: ${({ theme }) => theme.colors.personBackground};
`;

export const MovieWrapper = styled.div`
    @media (min-width: 533px) {
        display: flex;
        gap: 20px;
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
    @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
        gap: 20px;
    }
`;

export const MovieInfoTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xxl};
`;
