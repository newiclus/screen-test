import React from 'react';
import PropTypes from 'prop-types';
import { ButtonTag } from './Button.styled';

function Button({ border, color, icon, name, onClick, size }) {
  return (
    <ButtonTag onClick={onClick} border={border} color={color} size={size}>
      <span>{name}</span>
      {icon && <i className="material-icons">{icon}</i>}
    </ButtonTag>
  );
}

Button.propTypes = {
  border: PropTypes.number,
  color: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

Button.defaultProps = {
  border: 8,
  onClick: () => {},
  size: 'small',
};

export default Button;
