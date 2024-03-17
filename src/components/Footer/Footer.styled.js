import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.accent};
    transition: background-color ${({ theme }) => theme.baseTransition};
`;

export const LinksWrapper = styled.div`
    margin-bottom: ${({ theme }) => theme.spacing.retreatS};
    color: #fff;
    @media ${({ theme }) => theme.breakpoints.xs} {
        display: flex;
        max-width: 450px;
        margin-left: auto;
        margin-right: auto;
        gap: 24px;
    }
`;

export const LeftLinks = styled.div`
    text-align: center;
    margin-bottom: 24px;
    @media ${({ theme }) => theme.breakpoints.xs} {
        flex-basis: calc((100% - 24px) / 2);
        text-align: right;
        margin-bottom: 0;
    }
`;

export const RightLinks = styled.div`
    text-align: center;
    @media ${({ theme }) => theme.breakpoints.xs} {
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

export const StyledLink = styled.a`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 18px;
    color: ${({ theme }) => theme.colors.white};
    & svg {
        fill: currentColor;
    }
    &::before {
        content: '';
        position: absolute;
        top: 0;

        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.white};
    }
`;
