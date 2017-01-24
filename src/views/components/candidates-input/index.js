import React from 'react';

import { Field } from 'redux-form';

import TextInput from 'views/components/textinput';

const candidatesInput = ({ fields, meta: { touched, error}}) => {
  return (
    <ul>
      {fields.map((candidate, index, fields) =>
        <li key={index}>
          <h4>{fields.get(index).name} - {fields.get(index).party}</h4>
          <Field
            placeholder="Votes"
            name={`${candidate}.votes`}
            type="number"
            component={TextInput}
          />
        </li>
      )}
    </ul>
  );
};


export default candidatesInput;
