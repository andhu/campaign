import React, {PropTypes} from 'react';
import {Input,Container,Dropdown,Header} from 'semantic-ui-react';

const SearchInput = ({input, meta: { touched, error }, ...props, options }) => {
  const hasError = touched && error !== undefined;
  return (
    <div>
      <div>
        <Dropdown
          fluid
          search
          selection
          error={hasError}
          {...input}
          {...props}
          value={input.value}
          options={options}
          onChange={( param, data) => input.onChange(data.value)}
        />
      </div>
      <div>
        {hasError && <span>{error}</span>}
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  options: PropTypes.array.isRequired
};

export default SearchInput;
