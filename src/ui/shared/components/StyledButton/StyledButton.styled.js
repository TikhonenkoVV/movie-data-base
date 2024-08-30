import styled from '@emotion/styled';

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 44px;
    padding: 0;
    text-transform: uppercase;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 700;
    border: 2px solid ${({ theme }) => theme.colors.btnColor};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.btnColor};
    transition: background-color ${({ theme }) => theme.baseTransition};
    &:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.accent};
    }
    @media ${({ theme }) => theme.breakpoints.xs} {
        font-size: ${({ theme }) => theme.fontSizes.preMedium};
    }
`;
