import React from 'react';
import PropTypes from 'prop-types';
import { ButtonTag } from './Button.styled';

function Button({
  actived,
  border,
  color,
  icon,
  name,
  onClick,
  size,
  variant,
}) {
  return (
    <ButtonTag
      onClick={onClick}
      border={border}
      color={color}
      size={size}
      variant={variant}
    >
      <span>{name}</span>
      {icon && (
        <i className={`material-icons ${actived ? 'blueSky' : ''}`}>{icon}</i>
      )}
    </ButtonTag>
  );
}

Button.propTypes = {
  actived: PropTypes.bool,
  border: PropTypes.number,
  color: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  border: 8,
  color: 'lightGrey2',
  onClick: () => {},
  size: 'small',
};

export default Button;
