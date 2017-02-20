import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { Table, Button, Icon, Label, Header } from 'semantic-ui-react';

const SurveyList = ({surveys}) => {

  let surveyItems = surveys.map((survey, index) => {
    let candidates = survey.candidates.map((candidate, index) => {
      return (
        <Label as="h5" key={index} color={candidate.color}>
          {candidate.name} - {candidate.party}
          <Label.Detail>{candidate.votes}</Label.Detail>
        </Label>
      );
    });

    return (
      <Table.Row key={index}>
        <Table.Cell>
          <Button.Group>
            <Button color="orange" icon="edit" />
            <Button color="red" icon="delete" />
          </Button.Group>
        </Table.Cell>
        <Table.Cell>{survey.round}</Table.Cell>
        <Table.Cell>{survey.date}</Table.Cell>
        <Table.Cell>{survey.house}</Table.Cell>
        <Table.Cell>{survey.floor}</Table.Cell>
        <Table.Cell>{survey.totalVoters}</Table.Cell>
        <Table.Cell>{candidates}</Table.Cell>
        <Table.Cell>{survey.agent}</Table.Cell>
        <Table.Cell>{survey.contact}</Table.Cell>
      </Table.Row>
    );
  });


  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Actions</Table.HeaderCell>
          <Table.HeaderCell>Round</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>House</Table.HeaderCell>
          <Table.HeaderCell>Floor</Table.HeaderCell>
          <Table.HeaderCell>Total Voters</Table.HeaderCell>
          <Table.HeaderCell>Candidates</Table.HeaderCell>
          <Table.HeaderCell>Agent</Table.HeaderCell>
          <Table.HeaderCell>Contact</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {surveyItems}
      </Table.Body>
      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan='6'>
            
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

SurveyList.propTypes = {
  surveys: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    surveys: state.surveys.list.toJS()
  };
};


export default connect(mapStateToProps)(SurveyList);
