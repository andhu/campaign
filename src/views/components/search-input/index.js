import React, {PropTypes} from 'react';
import {Input,Container,Dropdown,Header} from 'semantic-ui-react';

const SearchInput = ({houses, input, meta: { touched, error }, ...props }) => {
  const hasError = touched && error !== undefined;

  const houseList = houses.map((house) => {
    return {
      key: house.key,
      value: house.key,
      text: house.name,
      content: <Header content={house.name} subheader={house.district} />
    }
  })
  return (
    <div>
      <div>
      <Dropdown fluid search selection error={hasError} {...input} {...props} options={houseList}/>
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
  houses: PropTypes.array.isRequired
};

export default SearchInput;
