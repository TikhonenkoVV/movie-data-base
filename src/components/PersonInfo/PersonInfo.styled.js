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
    /* max-width: 332px; */
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    padding: ${({ theme }) => theme.spacing.retreatS};
    background-color: ${({ theme }) => theme.colors.personBackground};
    @media ${({ theme }) => theme.breakpoints.fromStillL} {
        display: flex;
        gap: ${({ theme }) => theme.spacing.retreatS};
    }
`;

export const Picture = styled.picture`
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    @media ${({ theme }) => theme.breakpoints.onlyS} {
        flex-basis: calc((100% - ${({ theme }) => theme.spacing.retreatS}) / 2);
        margin-bottom: 0;
    }
`;

export const PersonPhoto = styled.img`
    margin-left: auto;
    margin-right: auto;
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
