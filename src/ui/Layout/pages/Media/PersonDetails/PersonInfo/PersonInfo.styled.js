import styled from '@emotion/styled';

export const PersonWrapper = styled.div`
    color: ${({ theme }) => theme.colors.themeText};
    @media ${({ theme }) => theme.breakpoints.l} {
        display: flex;
        align-items: flex-start;
        gap: 24px;
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
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    @media ${({ theme }) => theme.breakpoints.fromXsTillL} {
        flex-shrink: 0;
        margin-bottom: 0;
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
`;

export const PersonalInfoList = styled.ul``;

export const PersonalInfoItem = styled.li`
    &:not(:last-child) {
        margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    }
`;

export const MinorTitle = styled.h3`
    margin-bottom: 8px;
`;

export const InfoWrapper = styled.div`
    @media ${({ theme }) => theme.breakpoints.s} {
        flex-grow: 1;
    }
`;

export const ProfileWrapper = styled.div`
    margin-bottom: 40px;
`;
export const PersonTitle = styled.h1`
    font-size: 36px;
    margin-bottom: 40px;
`;
