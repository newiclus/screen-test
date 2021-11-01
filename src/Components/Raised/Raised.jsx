import React from 'react';
import ns from 'number-string';
import PropTypes from 'prop-types';

import { Content, Title, Subtext } from './Raised.styled';

function Raised({ amount, mt }) {
  return (
    <Content>
      <Title>{ns.toMoney(amount)}</Title>
      <Subtext>(MT {mt})</Subtext>
    </Content>
  );
}

Raised.propTypes = {
  amount: PropTypes.number,
  mt: PropTypes.number,
};

Raised.defaultProps = {
  amount: 0,
  mt: 0,
};

export default Raised;
