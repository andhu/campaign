import React, {PropTypes} from 'react';
import {Input,Container,Dropdown,Header} from 'semantic-ui-react';

const SearchInput = ({dropdownList, input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error !== undefined;
  return (
    <div>
      <div>
      <Dropdown fluid search selection error={hasError} {...input} {...props} options={dropdownList}/>
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
  dropdownList: PropTypes.array.isRequired
};

export default SearchInput;
