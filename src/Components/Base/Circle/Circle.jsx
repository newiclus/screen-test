import React from 'react';
import PropTypes from 'prop-types';

import { CircleTag } from './Circle.styled';

function Circle({ color, size }) {
  return <CircleTag color={color} size={size} />;
}

Circle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

Circle.defaultProps = {
  color: 'grey',
  size: 35,
};

export default Circle;
