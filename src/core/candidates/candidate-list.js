import { FirebaseList } from 'core/firebase';
import { candidateActions } from './actions';
import { Candidate } from './candidate';

export const candidateList = new FirebaseList({
  onAdd: candidateActions.createCandidateSuccess,
  onChange: candidateActions.updateCandidateSuccess,
  onLoad: candidateActions.loadCandidatesSuccess,
  onRemove: candidateActions.removeCandidateSuccess
}, Candidate);
