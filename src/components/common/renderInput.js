import React, {PropTypes} from 'react';

const renderInput = ({input, placeholder, meta}) => {
	return(
	<div>
		<label>{placeholder}</label>
		<div>
			<input className="form-control" type="text" {...input} placeholder={placeholder}/>
			{meta.error && meta.touched && <span>{meta.error}</span>}
		</div>
	</div>

	);
};

renderInput.propTypes = {
	input: PropTypes.object.isRequired,
	placeholder: PropTypes.string.isRequired,
	meta: PropTypes.object
};

export default renderInput;