import styled from '@emotion/styled';

export const StyledContainer = styled.div`
    width: 100%;

    padding-left: ${({ theme }) => theme.spacing.step * 5}px;
    padding-right: ${({ theme }) => theme.spacing.step * 5}px;

    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.s}) {
        width: ${({ theme }) => theme.breakpoints.s};
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
        width: ${({ theme }) => theme.breakpoints.m};
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
        width: ${({ theme }) => theme.breakpoints.l};
    }
`;
