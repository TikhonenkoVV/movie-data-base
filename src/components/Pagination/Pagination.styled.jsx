import styled from '@emotion/styled';

export const PaginationBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
`;
export const DotButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    transition: background-color 250ms;
    background-color: ${props => props.theme.colors.hover};
    &:hover,
    &:focus {
        background-color: ${props => props.theme.colors.accent};
    }
`;
export const DotStart = styled(DotButton)``;
export const DotEnd = styled(DotButton)``;
export const DotPrev = styled(DotButton)``;
export const DotNext = styled(DotButton)``;
export const Dot = styled(DotButton)`
    color: ${props => props.theme.colors.white};
`;
