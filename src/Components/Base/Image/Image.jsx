import React from 'react';
import PropTypes from 'prop-types';
import { Figure } from './Image.styled';

function Image({ src, alt, border }) {
  return (
    <Figure border={border}>
      <img src={src} alt={alt} />
    </Figure>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  border: PropTypes.number,
};

Image.defaultProps = {
  alt: 'a image description',
  border: 0,
};

export default Image;
