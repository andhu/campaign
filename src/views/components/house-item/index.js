import React, { Component, PropTypes } from 'react';
import { Button, Input } from 'semantic-ui-react';

import HouseForm from 'views/components/house-form';

class HouseItem extends Component {
  constructor() {
    super(...arguments);
    this.state = { editing: false };

    this.edit = ::this.edit;
    this.stopEditing = ::this.stopEditing;
    this.remove = ::this.remove;
    this.save = :: this.save;
  }

  edit() {
    this.setState({editing: true });
  }

  stopEditing() {
    this.setState({editing: false });
  }

  remove() {
    this.props.removeHouse(this.props.house);
  }

  save(formData) {
    if (this.state.editing) {
      const { house } = this.props;
      // console.log('data: ', formData, 'House: ', House);
      this.props.updateHouse(house, formData);
      this.stopEditing();
    }
  }

  renderHouseInput(house) {
    return (
      <div>
        <HouseForm
          submitAction={this.save}
          submitButtonText="Update"
          initialValues={house.toJS()}
          form={`house-update${house.key}`}
        />
        <Button content="Clear" onClick={this.stopEditing} />
      </div>
    );
  }

  renderHouse(house) {
    return (
      <div>
        <span>Name: {house.name}</span>
        <span>Party: {house.party}</span>
        <span>Color: {house.color}</span>
        <Button positive icon="pencil" onClick={this.edit} />
        <Button negative icon="remove" onClick={this.remove} />
      </div>
    );
  }

  render() {
    let { editing } = this.state;
    let { house } = this.props;

    return (
      <div>
        {editing ?
          this.renderHouseInput(house) :
          this.renderHouse(house)
        }
      </div>
    );
  }
}

HouseItem.propTypes = {
  house: PropTypes.object.isRequired,
  removeHouse: PropTypes.func.isRequired,
  updateHouse: PropTypes.func.isRequired
};

export default HouseItem;
