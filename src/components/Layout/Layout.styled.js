import styled from '@emotion/styled';

export const MainStyled = styled.main`
    flex-grow: 1;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    transition: background-color ${({ theme }) => theme.baseTransition};
`;

export const LinksWrapper = styled.div`
    display: flex;
    gap: 24px;
    color: #fff;
`;

export const LeftLinks = styled.div`
    flex-basis: calc((100% - 24px) / 2);
    text-align: right;
`;

export const RightLinks = styled.div`
    flex-basis: calc((100% - 24px) / 2);
    text-align: left;
`;

export const FooterTitle = styled.h2`
    margin-bottom: 16px;
`;

export const LinksItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;
