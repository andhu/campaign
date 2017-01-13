import React, {PropTypes} from 'react';
import {Form} from 'semantic-ui-react';

import Dateicker from 'react-datepicker';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const DateInput = ({input, placeholder, meta}) => {
  const selected = input.value ? moment(input.value) : null;
  const dateFormat = "YYYY-MM-DD";

  return(
  <Form.Field error={meta.error && meta.touched}>
      <Dateicker
        selected={selected}
        dateFormat={dateFormat} 
        placeholderText={placeholder}
        {...input} />
  </Form.Field>
  );
};

DateInput.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
};
  
export default DateInput;