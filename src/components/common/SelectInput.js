import React, {PropTypes} from 'react';
import {Form, Dropdown} from 'semantic-ui-react';



const SelectInput = ({placeholder, input, meta, options, search, selection, inline}) => {
  const handleOnChange = (e, data) => {
    input.onChange(data.value);
  };

  const handleOnBlur = (e, data) => {
    input.onBlur(data.value);
  };

  return(
  <Form.Field error={meta.error && meta.touched}>
    <Dropdown
      placeholder={placeholder}
      {...input}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      options={options}
      search={search}
      inline={inline}
      selection={selection}
     />
  </Form.Field>
    
  );
};

SelectInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  onChange: PropTypes.func
};
  
export default SelectInput;