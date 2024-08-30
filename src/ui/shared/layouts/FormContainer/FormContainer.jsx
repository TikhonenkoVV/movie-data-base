import { StyledFormContainer } from './FormContainer.styled';

export const FormContainer = ({ children, reference }) => {
    return (
        <StyledFormContainer ref={reference}>{children}</StyledFormContainer>
    );
};
