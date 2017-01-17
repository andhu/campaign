import React, { Component, PropTypes } from 'react';

import { Button } from 'semantic-ui-react';

class CandidateItem extends Component {
  constructor() {
    super(...arguments);
    this.state = { editing: false };

    this.edit = ::this.edit;
    this.stopEditing = ::this.stopEditing;
    this.remove = ::this.remove;
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

  renderCandidate(candidate) {
    return (
      <div>
        <div>
          Name: {candidate.name}
          <span>Party: {candidate.party}</span>
          <span>Color: {candidate.color}</span>
        </div>
      </div>
    );
  }

  render() {
    let { editing } = this.state;
    let { candidate } = this.props;

    return (
      <div>
        {this.renderCandidate(candidate)}
        { !editing ?
          <Button content="Edit" onClick={this.edit} /> :
          <Button content="Clear"onClick={this.stopEditing} />
        }
        <Button content="Remove" onClick={this.remove} />
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
