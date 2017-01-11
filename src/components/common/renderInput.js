import React, {PropTypes} from 'react';
import {Form} from 'semantic-ui-react';

const renderInput = ({input, placeholder, type, meta}) => {
	
	return(
	<Form.Field error={meta.error && meta.touched}>

		<label>{placeholder}</label>
		<input {...input} type={type} placeholder={placeholder}  />
		{meta.error && meta.touched && <div>{meta.error}</div>}

	</Form.Field>
	);
};

renderInput.propTypes = {
	input: PropTypes.object.isRequired,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string,
	meta: PropTypes.object
};
	
export default renderInput;