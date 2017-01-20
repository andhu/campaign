import { List } from 'immutable';
import React, { PropTypes} from 'react';

import CandidateItem from 'views/components/candidate-item';

const CandidateList = ({candidates, removeCandidate, updateCandidate}) => {
  let candidateItems = candidates.map((candidate, index) => {
    return (
      <CandidateItem
        key={index}
        candidate={candidate}
        removeCandidate={removeCandidate}
        updateCandidate={updateCandidate}
      />
    );
  });
  return (
    <div>Candidate List
      {candidateItems}
    </div>
  );
};

CandidateList.propTypes = {
  candidates: PropTypes.instanceOf(List),
  removeCandidate: PropTypes.func.isRequired,
  updateCandidate: PropTypes.func.isRequired
};

export default CandidateList;
