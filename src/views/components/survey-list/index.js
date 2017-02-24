import React, {PropTypes} from 'react';
import { Table, Button, Label } from 'semantic-ui-react';

const SurveyList = ({surveys, houses}) => {
  let surveyItems = surveys.map((survey, index) => {

    let candidates = survey.candidates.map((candidate, index) => {
      return (
        <Label as="h5" key={index} color={candidate.color}>
          {candidate.name} - {candidate.party}
          <Label.Detail>{candidate.votes}</Label.Detail>
        </Label>
      );
    });

    let getHouseName = houseKey => {
      let house = houses.filter( house => {
        return house.key === houseKey; // This returns an array of objects
      });

      if (house[0]) return house[0].name;
    };

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
        <Table.Cell>{getHouseName(survey.house)}</Table.Cell>
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
    </Table>
  );
};

SurveyList.propTypes = {
  surveys: PropTypes.array.isRequired,
  houses: PropTypes.array.isRequired
};


export default SurveyList;
