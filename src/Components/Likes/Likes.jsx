import React from 'react';
import PropTypes from 'prop-types';

import { ContentLikes, Paragraph } from './Likes.styled';

function Likes({ value }) {
  return (
    <ContentLikes>
      <Paragraph>Likes ({value})</Paragraph>
      <span className="actived" />
    </ContentLikes>
  );
}

Likes.propTypes = {
  value: PropTypes.number.isRequired,
};

Likes.defaultProps = {
  value: 0,
};

export default Likes;
