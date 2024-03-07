import PropTypes from 'prop-types';
import { Icon } from './Svg.styled';

export const Svg = ({ use, className, w, h }) => {
    return (
        <Icon className={className} width={w} height={h}>
            <use href={use} />
        </Icon>
    );
};

Svg.propTypes = {
    use: PropTypes.string.isRequired,
};
