import React, { PropTypes, Component } from 'react';

import CandidateForm from 'views/components/candidate-form';

import { Modal, Button } from 'semantic-ui-react';

class CandidateAdd extends Component {
  render() {
    var { createCandidate } = this.props;
    return (
      <Modal
        trigger={<Button icon="world" content="Add Candidate" onClick={this.handleOpen} />}
        closeIcon="close">

        <Modal.Header>Add a Candidate</Modal.Header>
        <Modal.Content>
          <CandidateForm
            submitAction={createCandidate}
            submitButtonText="Save"
            form="candidate-add"
          />
        </Modal.Content>
      </Modal>
    );
  }
}

CandidateAdd.propTypes = {
  createCandidate: PropTypes.func.isRequired
};

export default CandidateAdd;
