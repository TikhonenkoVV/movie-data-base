import styled from '@emotion/styled';

export const CastTitle = styled.h2`
    color: ${({ theme }) => theme.colors.themeText};
    margin-bottom: 20px;
    transition: color ${({ theme }) => theme.baseTransition};
`;

export const CastGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-gap: ${({ theme }) => theme.spacing.step * 5}px;
    @media (min-width: 533px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const CastElement = styled.li`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
    & p {
        padding: 0 5px;
        line-height: 1.3;
        text-align: center;
    }
`;

export const CastPhoto = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: top;
    aspect-ratio: 3 / 4;
    margin-bottom: 10px;
`;
