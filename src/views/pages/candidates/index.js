import { List } from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CandidateAdd from 'views/components/candidate-add';
import CandidateList from 'views/components/candidate-list';
import { candidateActions, getVisibleCandidates } from 'core/candidates';

import { Container, Grid } from 'semantic-ui-react';


const CandidatePage = ({candidates, removeCandidate, updateCandidate}) => {
  return (
    <Container>
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <CandidateAdd createCandidate={candidateActions.handleCreateCandidate()} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <CandidateList
            candidates={candidates}
            removeCandidate={removeCandidate}
            updateCandidate={updateCandidate}
          />
        </Grid.Row>
      </Grid>
    </Container>
  );
};

CandidatePage.propTypes = {
  candidates: PropTypes.instanceOf(List),
  // createCandidate: PropTypes.func.isRequired,
  // filterCandidates: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  removeCandidate: PropTypes.func.isRequired,
  updateCandidate: PropTypes.func.isRequired

};

// Connect

const mapStateToProps = state => ({
  candidates: getVisibleCandidates(state)
});

const mapDispatchToProps = {
  // createCandidate: candidateActions.handleCreateCandidate(),
  filterCandidates: candidateActions.filterCandidates,
  removeCandidate: candidateActions.removeCandidate,
  updateCandidate: candidateActions.updateCandidate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandidatePage);

