import { StyledForm } from './AuthForm.styled';

export const AuthForm = ({ children, handleSubmit }) => {
    return <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>;
};
