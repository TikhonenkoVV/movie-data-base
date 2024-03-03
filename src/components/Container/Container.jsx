import { StyledContainer } from './Container.styled';

export const Container = ({ children, style }) => {
    return <StyledContainer style={style}>{children}</StyledContainer>;
};
