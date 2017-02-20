import React from 'react';

import { Field } from 'redux-form';
import { Label,Grid } from 'semantic-ui-react';

import TextInput from 'views/components/textinput';

const candidatesInput = ({ fields, meta: { touched, error}}) => {
  return (
    <div>
      {fields.map((candidate, index, fields) =>
        <Grid columns={2} container>
          <Grid.Column width={10}>       
            <Field
              placeholder="Votes"
              name={`${candidate}.votes`}
              type="number"
              component={TextInput}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Label color={fields.get(index).color} tag>{fields.get(index).name} - {fields.get(index).party}</Label>
          </Grid.Column>
        </Grid>
      )}
    </div>
  );
};


export default candidatesInput;
