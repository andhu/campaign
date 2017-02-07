import React, {PropTypes} from 'react';
import {Input,Container} from 'semantic-ui-react';

const TextInput = ({input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error !== undefined;
  return (
    <div>
      <div>
      <Input as={Container} error={hasError} {...input} {...props} />
      </div>
      <div>
        {hasError && <span>{error}</span>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default TextInput;
