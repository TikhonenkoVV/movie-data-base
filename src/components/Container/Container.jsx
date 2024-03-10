import { StyledContainer } from './Container.styled';

export const Container = ({ children, style, reference }) => {
    return (
        <StyledContainer ref={reference} style={style}>
            {children}
        </StyledContainer>
    );
};
