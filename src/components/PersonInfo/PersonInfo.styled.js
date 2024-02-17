import styled from '@emotion/styled';

export const PersonWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;
    color: ${({ theme }) => theme.colors.themeText};
`;

export const Aside = styled.aside`
    flex-shrink: 0;
    width: 348px;
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.personBackground};
`;

export const AsideTitle = styled.h2`
    margin-bottom: 24px;
`;

export const PersonalInfoList = styled.ul``;

export const PersonalInfoItem = styled.li`
    margin-bottom: 12px;
`;

export const MinorTitle = styled.h3`
    margin-bottom: 12px;
`;

export const InfoWrapper = styled.div`
    flex-grow: 1;
`;

export const ProfileWrapper = styled.div`
    margin-bottom: 40px;
`;
export const PersonTitle = styled.h1`
    font-size: 36px;
    margin-bottom: 40px;
`;
