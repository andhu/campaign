import React, { PropTypes, Component } from 'react';

import CandidateForm from 'views/components/candidate-form';

import { Modal, Button, Icon } from 'semantic-ui-react';

class CandidateAdd extends Component {
  constructor() {
    super(...arguments);
    this.state = { modalOpen: false };
    this.handleOpen = ::this.handleOpen;
    this.handleClose = ::this.handleClose;
  }

  handleOpen() {
    this.setState({ modalOpen: true });
  }

  handleClose() {
    this.setState({ modalOpen: false });
  }

  render() {
    var { createCandidate } = this.props;
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Add Candidate</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}>

        <Modal.Header>Add a Candidate</Modal.Header>
        <Modal.Content>
          <CandidateForm
            createCandidate={createCandidate}
            submitButtonText="Save"
            form="candidate-add"
          />
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={this.handleClose} inverted>
            <Icon name="delete" /> Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

CandidateAdd.propTypes = {
  createCandidate: PropTypes.func.isRequired
};

export default CandidateAdd;
