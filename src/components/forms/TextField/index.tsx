import React, { ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import { Input, InputWrapper } from './styles';

interface ITextField {
  placeholder: string,
  name: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  value: string,
}

const TextField: React.FC<ITextField> = ({
  placeholder,
  name,
  onChange,
  value,
}) => (
  <InputWrapper>
    <Input
      type="text"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
  </InputWrapper>
);

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextField;
