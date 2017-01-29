import React, { Component, PropTypes } from 'react';
import { Button, Card } from 'semantic-ui-react';

import CandidateForm from 'views/components/candidate-form';

class CandidateItem extends Component {
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
    this.props.removeCandidate(this.props.candidate);
  }

  save(formData) {
    if (this.state.editing) {
      const { candidate } = this.props;
      this.props.updateCandidate(candidate, formData);
      this.stopEditing();
    }
  }

  renderCandidateInput(candidate) {
    return (
      <Card.Content>
        <CandidateForm
          submitAction={this.save}
          submitButtonText="Update"
          initialValues={candidate.toJS()}
          form={`candidate-update${candidate.key}`}
        />
        <Button content="Clear" onClick={this.stopEditing} />
      </Card.Content>
    );
  }

  renderCandidate(candidate) {
    return (
      <Card.Content>
        <Card.Header>
          {candidate.name}
        </Card.Header>
        <Card.Meta>
          {candidate.party}
        </Card.Meta>
        <Card.Description>
          {candidate.color}
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
    let { candidate } = this.props;

    return (
      <Card centered>
        {editing ?
          this.renderCandidateInput(candidate) :
          this.renderCandidate(candidate)
        }
      </Card>
    );
  }
}

CandidateItem.propTypes = {
  candidate: PropTypes.object.isRequired,
  removeCandidate: PropTypes.func.isRequired,
  updateCandidate: PropTypes.func.isRequired
};

export default CandidateItem;
