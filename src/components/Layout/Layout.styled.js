import styled from '@emotion/styled';

export const MainStyled = styled.main`
    flex-grow: 1;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    transition: background-color ${({ theme }) => theme.baseTransition};
`;

export const LinksWrapper = styled.div`
    color: #fff;
    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        display: flex;
        gap: 24px;
    }
`;

export const LeftLinks = styled.div`
    text-align: center;
    margin-bottom: 24px;
    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        flex-basis: calc((100% - 24px) / 2);
        text-align: right;
        margin-bottom: 0;
    }
`;

export const RightLinks = styled.div`
    text-align: center;
    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        flex-basis: calc((100% - 24px) / 2);
        text-align: left;
    }
`;

export const FooterTitle = styled.h2`
    margin-bottom: 16px;
`;

export const LinksItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 8px;
    }
`;
