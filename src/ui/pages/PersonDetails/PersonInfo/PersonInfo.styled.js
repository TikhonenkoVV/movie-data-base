import styled from '@emotion/styled';

export const PersonWrapper = styled.div`
    color: ${({ theme }) => theme.colors.themeText};
    @media ${({ theme }) => theme.breakpoints.l} {
        display: flex;
        align-items: flex-start;
        gap: 24px;
    }
`;

export const PersonTitle = styled.h1`
    font-size: 36px;
    &.minor {
        margin-bottom: 16px;
        @media ${({ theme }) => theme.breakpoints.l} {
            display: none;
        }
    }
    &.major {
        display: none;
        margin-bottom: 40px;
        @media ${({ theme }) => theme.breakpoints.l} {
            display: block;
        }
    }
`;

export const Aside = styled.aside`
    flex-shrink: 0;
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    padding: ${({ theme }) => theme.spacing.retreatS};
    background-color: ${({ theme }) => theme.colors.mediumBackground};
    @media ${({ theme }) => theme.breakpoints.fromXsTillL} {
        display: flex;
        justify-content: start;
        align-items: start;
        gap: ${({ theme }) => theme.spacing.retreatS};
    }
    @media ${({ theme }) => theme.breakpoints.s} {
        padding: ${({ theme }) => theme.spacing.retreatM};
    }
    @media ${({ theme }) => theme.breakpoints.l} {
        width: 290px;
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        width: 352px;
        padding: ${({ theme }) => theme.spacing.retreatL};
    }
`;

export const PersonPhoto = styled.img`
    width: 200px;
    aspect-ratio: 2 / 3;
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    @media ${({ theme }) => theme.breakpoints.fromXsTillL} {
        flex-shrink: 0;
        margin-bottom: 0;
    }
    @media ${({ theme }) => theme.breakpoints.xs} {
        margin-left: 0;
        margin-right: 0;
    }
    @media ${({ theme }) => theme.breakpoints.s} {
        width: 250px;
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        width: 300px;
    }
`;

export const AsideTitle = styled.h2`
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    &::first-letter {
        text-transform: uppercase;
    }
`;

export const PersonalInfoList = styled.ul``;

export const PersonalInfoItem = styled.li`
    &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    }
`;

export const MinorTitle = styled.h3`
    margin-bottom: 8px;
    &::first-letter {
        text-transform: uppercase;
    }
`;

export const Description = styled.p`
    &::first-letter {
        text-transform: uppercase;
    }
`;
export const InfoWrapper = styled.div`
    @media ${({ theme }) => theme.breakpoints.s} {
        flex-grow: 1;
    }
`;

export const ProfileWrapper = styled.div`
    margin-bottom: 40px;
`;
