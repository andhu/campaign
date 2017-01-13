import React, {PropTypes} from 'react';
import {Form, Input} from 'semantic-ui-react';

const TextInput = ({input, placeholder, type, meta, label}) => {
  
  return(
  <Form.Field error={meta.error && meta.touched}>
    <Input {...input} label={label} type={type} placeholder={placeholder}  />
  </Form.Field>
  );
};

TextInput.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  meta: PropTypes.object.isRequired
};
  
export default TextInput;