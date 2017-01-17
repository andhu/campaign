export const candidateActions = {
  CREATE_CANDIDATE: 'CREATE_CANDIDATE',
  CREATE_CANDIDATE_FAILED: 'CREATE_CANDIDATE_FAILED',
  CREATE_CANDIDATE_SUCCESS: 'CREATE_CANDIDATE_SUCCESS',

  REMOVE_CANDIDATE: 'REMOVE_CANDIDATE',
  REMOVE_CANDIDATE_FAILED: 'REMOVE_CANDIDATE_FAILED',
  REMOVE_CANDIDATE_SUCCESS: 'REMOVE_CANDIDATE_SUCCESS',

  UPDATE_CANDIDATE: 'UPDATE_CANDIDATE',
  UPDATE_CANDIDATE_FAILED: 'UPDATE_CANDIDATE_FAILED',
  UPDATE_CANDIDATE_SUCCESS: 'UPDATE_CANDIDATE_SUCCESS',

  FILTER_CANDIDATES: 'FILTER_CANDIDATES',
  LOAD_CANDIDATES_SUCCESS: 'LOAD_CANDIDATES_SUCCESS',

  createCandidate: candidate => ({
    type: candidateActions.CREATE_CANDIDATE,
    payload: { candidate }
  }),

  createCandidateFailed: error => ({
    type: candidateActions.CREATE_CANDIDATE_FAILED,
    payload: { error }
  }),

  createCandidateSuccess: candidate => ({
    type: candidateActions.CREATE_CANDIDATE_SUCCESS,
    payload: { candidate }
  }),

  removeCandidate: candidate => ({
    type: candidateActions.REMOVE_CANDIDATE,
    payload: { candidate }
  }),

  removeCandidateFailed: error => ({
    type: candidateActions.REMOVE_CANDIDATE_FAILED,
    payload: { error }
  }),

  removeCandidateSuccess: candidate => ({
    type: candidateActions.REMOVE_CANDIDATE_SUCCESS,
    payload: { candidate }
  }),

  updateCandidate: (candidate, changes) => ({
    type: candidateActions.UPDATE_CANDIDATE,
    payload: {candidate, changes}
  }),

  updateCandidateFailed: error => ({
    type: candidateActions.UPDATE_CANDIDATE_FAILED,
    payload: { error }
  }),

  updateCandidateSuccess: candidate => ({
    type: candidateActions.UPDATE_CANDIDATE_SUCCESS,
    payload: candidate
  }),

  filterCandidates: filterType => ({
    type: candidateActions.FILTER_CANDIDATES,
    payload: { filterType }
  }),

  loadCandidatesSuccess: candidates => ({
    type: candidateActions.LOAD_CANDIDATES_SUCCESS,
    payload: { candidates }
  })
};
