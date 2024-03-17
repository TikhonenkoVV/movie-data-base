import styled from '@emotion/styled';

export const MainStyled = styled.main`
    flex-grow: 1;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    transition: background-color ${({ theme }) => theme.baseTransition};
`;

export const ButtonUp = styled.button`
    position: fixed;
    bottom: 16px;
    right: 32px;
    width: 40px;
    height: 40px;
    pointer-events: ${({ isHidden }) => (isHidden ? 'none' : 'all')};
    opacity: ${({ isHidden }) => (isHidden ? '0' : '0.6')};
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
    transition: opacity ${({ theme }) => theme.baseTransition};
    z-index: 1;
    & svg {
        fill: currentColor;
        transform: rotate(270deg);
        width: 35px;
        height: 35px;
        @media ${({ theme }) => theme.breakpoints.s} {
            width: 40px;
            height: 40px;
        }
    }
    @media ${({ theme }) => theme.breakpoints.xs} {
        right: 50%;
        transform: translateX(208px);
    }
    @media ${({ theme }) => theme.breakpoints.s} {
        bottom: 20px;
        width: 60px;
        height: 60px;
        transform: translateX(244px);
    }
    @media ${({ theme }) => theme.breakpoints.m} {
        transform: translateX(344px);
    }
    @media ${({ theme }) => theme.breakpoints.l} {
        transform: translateX(472px);
    }
    @media ${({ theme }) => theme.breakpoints.xl} {
        transform: translateX(594px);
    }
    @media ${({ theme }) => theme.breakpoints.xxl} {
        transform: translateX(674px);
    }
`;
