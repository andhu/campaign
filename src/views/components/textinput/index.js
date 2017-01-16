import React, {PropTypes} from 'react';
import {Input, Message} from 'semantic-ui-react';

const TextInput = ({input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error !== undefined;
  return (
    <div>
      {hasError &&
        <Message
          error
          header="Error"
          content={error}
        />}

      <Input error={hasError} {...input} {...props} />
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
