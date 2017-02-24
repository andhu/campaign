import React, { Component, PropTypes } from 'react';
import { Button, Card } from 'semantic-ui-react';

import UserForm from 'views/components/user-form';

class UserItem extends Component {
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
    this.props.removeUser(this.props.user);
  }

  save(formData) {
    if (this.state.editing) {
      const { user } = this.props;
      this.props.updateUser(user, formData);
      this.stopEditing();
    }
  }

  renderCandidateInput(user) {
    return (
      <Card.Content>
        <UserForm
          submitAction={this.save}
          submitButtonText="Update"
          initialValues={user}
          form={`user-update${user.key}`}
        />
        <Button content="Clear" onClick={this.stopEditing} />
      </Card.Content>
    );
  }

  renderCandidate(user) {
    return (
      <Card.Content>
        <Card.Header>
          {user.name}
        </Card.Header>
        <Card.Meta>
          {user.isAdmin}
        </Card.Meta>
        <Card.Description>
          <div className="ui two buttons">
            <Button content="Edit" basic color="green" icon="pencil" onClick={this.edit} />
            <Button content="Delete" basic color="red" icon="remove" onClick={this.remove} />
          </div>
        </Card.Description>
      </Card.Content>
    );
  }

  render() {
    let { editing } = this.state;
    let { user } = this.props;

    return (
      <Card centered>
        {editing ?
          this.renderCandidateInput(user) :
          this.renderCandidate(user)
        }
      </Card>
    );
  }
}

UserItem.propTypes = {
  removeUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default UserItem;
