import { createSelector } from 'reselect';

export function getCandidates(state) {
  return state.candidates;
}

export function getCandidateFilter(state) {
  return getCandidates(state).filter;
}

export function getCandidateList(state) {
  return getCandidates(state).list;
}

export const getVisibleCandidates = createSelector(
  getCandidateFilter,
  getCandidateList,
  (filter, candidateList) => {
    switch (filter) {
      default:
        return candidateList;
    }
  }
);
