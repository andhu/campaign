import { List } from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CandidateForm from 'views/components/candidate-form';
import CandidateList from 'views/components/candidate-list';
import { candidateActions, getVisibleCandidates } from 'core/candidates';

const CandidatePage = ({candidates, removeCandidate, updateCandidate}) => {
  return (
    <div>
      <CandidateForm
        submitAction={candidateActions.handleCreateCandidate()}
        submitButtonText="Save"
        form="candidate-add"
      />
      <CandidateList
        candidates={candidates}
        removeCandidate={removeCandidate}
        updateCandidate={updateCandidate}
      />
    </div>
  );
};

CandidatePage.propTypes = {
  candidates: PropTypes.instanceOf(List),
  //createCandidate: PropTypes.func.isRequired,
  //filterCandidates: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  removeCandidate: PropTypes.func.isRequired,
  updateCandidate: PropTypes.func.isRequired

};

// Connect

const mapStateToProps = state => ({
  candidates: getVisibleCandidates(state)
});

const mapDispatchToProps = {
  //createCandidate: candidateActions.handleCreateCandidate(),
  filterCandidates: candidateActions.filterCandidates,
  removeCandidate: candidateActions.removeCandidate,
  updateCandidate: candidateActions.updateCandidate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidatePage);

