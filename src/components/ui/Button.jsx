import PropTypes from 'prop-types';

const Button = ({ children = 'Click aquí' }) => {
    return (
        <button className="rounded py-2 px-4 absolute bg-white">{children}</button>
    );
};

Button.propTypes = {
    children: PropTypes.string,
};

export default Button;