import { List } from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CandidateForm from 'views/components/candidate-form';
import { candidateActions, getVisibleCandidates } from 'core/candidates';

const CandidatePage = () => {
  return (
    <div><CandidateForm /></div>
  );
};

CandidatePage.propTypes = {
  candidates: PropTypes.instanceOf(List),
  //createCandidate: PropTypes.func.isRequired,
  filterCandidates: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  removeCandidate: PropTypes.func.isRequired,
  updateCandidate: PropTypes.func.isRequired

};

// Connect

const mapStateToProps = state => ({
  candidates: getVisibleCandidates(state)
});

const mapDispatchToProps = {
  //createCandidate: candidateActions.createCandidate,
  filterCandidates: candidateActions.filterCandidates,
  removeCandidate: candidateActions.removeCandidate,
  updateCandidate: candidateActions.updateCandidate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidatePage);

