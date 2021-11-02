import React from 'react';
import PropTypes from 'prop-types';

import { Button, Circle } from '../Base';
import { ContentRow, Row, User } from './Avatar.styled';

function Avatar({ id, alias, color, isFollowed, name, onFollow }) {
  const handleClick = () => {
    onFollow(id);
  };

  return (
    <ContentRow>
      <Row>
        <User>
          <Circle color={color} />
          <aside>
            <h2>{alias}</h2>
            <h3>{name}</h3>
          </aside>
        </User>
      </Row>
      <Row align="right">
        <Button
          border={6}
          color={isFollowed ? 'white' : 'blueSky'}
          name={isFollowed ? 'Following' : 'Follow'}
          size="medium"
          variant={isFollowed ? 'outlined' : null}
          onClick={handleClick}
        />
      </Row>
    </ContentRow>
  );
}

Avatar.propTypes = {
  id: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  color: PropTypes.string,
  isFollowed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onFollow: PropTypes.func.isRequired,
};

export default Avatar;
