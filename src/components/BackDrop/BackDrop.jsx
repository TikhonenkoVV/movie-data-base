import { StyledDiv } from './BackDrop.styled';

export const BackDrop = ({ children, onClick }) => {
    return <StyledDiv onClick={onClick}>{children}</StyledDiv>;
};
