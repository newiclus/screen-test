import React from 'react';
import PropTypes from 'prop-types';

import { ContentInput, InputTag } from './InputField.styled';

function InputField({ name, onChange, placeholder, type }) {
  return (
    <ContentInput>
      <InputTag
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </ContentInput>
  );
}

InputField.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

InputField.defaultPro = {
  type: 'text',
  onChange: () => {},
  placeholder: '',
};

export default InputField;
