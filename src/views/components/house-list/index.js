import { List } from 'immutable';
import React, { PropTypes} from 'react';
import { Table, Button, Icon, Label, Header } from 'semantic-ui-react';


const HouseList = ({houses, removeHouse, updateHouse}) => {
   let houseItems = houses.map((house, index) => {
    return (
      <Table.Row key={index}>
        <Table.Cell>{index+1}</Table.Cell>
        <Table.Cell>{house.name}</Table.Cell>
        <Table.Cell>{house.district}</Table.Cell>
        <Table.Cell>
          <Button.Group>
            <Button color="orange" icon="edit" />
            <Button color="red" icon="delete" />
          </Button.Group>
        </Table.Cell>
      </Table.Row>
    );
  });


  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>#</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>District</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {houseItems}
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

HouseList.propTypes = {
  houses: PropTypes.instanceOf(List).isRequired,
  removeHouse: PropTypes.func.isRequired,
  updateHouse: PropTypes.func.isRequired
};

export default(HouseList);
