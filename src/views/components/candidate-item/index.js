import React, { Component, PropTypes } from 'react';
import { Button, Input } from 'semantic-ui-react';

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
      // console.log('data: ', formData, 'candidate: ', candidate);
      this.props.updateCandidate(candidate, formData);
      this.stopEditing();
    }
  }

  renderCandidateInput(candidate) {
    return (
      <div>
        <CandidateForm
          submitAction={this.save}
          submitButtonText="Update"
          initialValues={candidate.toJS()}
          form={`candidate-update${candidate.key}`}
        />
        <Button content="Clear" onClick={this.stopEditing} />
      </div>
    );
  }

  renderCandidate(candidate) {
    return (
      <div>
        <span>Name: {candidate.name}</span>
        <span>Party: {candidate.party}</span>
        <span>Color: {candidate.color}</span>
        <Button positive icon="pencil" onClick={this.edit} />
        <Button negative icon="remove" onClick={this.remove} />
      </div>
    );
  }

  render() {
    let { editing } = this.state;
    let { candidate } = this.props;

    return (
      <div>
        {editing ?
          this.renderCandidateInput(candidate) :
          this.renderCandidate(candidate)
        }
      </div>
    );
  }
}

CandidateItem.propTypes = {
  candidate: PropTypes.object.isRequired,
  removeCandidate: PropTypes.func.isRequired,
  updateCandidate: PropTypes.func.isRequired
};

export default CandidateItem;
