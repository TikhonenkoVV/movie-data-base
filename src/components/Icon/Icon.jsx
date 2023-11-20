import PropTypes from 'prop-types';
import { Icon } from './Icon.styled';

export const Svg = ({ use, className }) => {
    return (
        <Icon className={className} width={20} height={20}>
            <use href={use} />
        </Icon>
    );
};

Svg.propTypes = {
    use: PropTypes.string.isRequired,
};
