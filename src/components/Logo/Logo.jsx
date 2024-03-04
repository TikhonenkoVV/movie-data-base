import { Logotype } from './Logo.styled';

export const Logo = ({ newClass, label, dest }) => {
    return <Logotype className={newClass} aria-label={label} to={dest} />;
};
