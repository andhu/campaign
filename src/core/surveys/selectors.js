import { createSelector } from 'reselect';

export function getSurveys(state) {
  return state.surveys;
}

export function getSurveyFilter(state) {
  return getSurveys(state).filter;
}

export function getSurveyList(state) {
  return getSurveys(state).list;
}

export const getVisibleSurveys = createSelector(
  getSurveyFilter,
  getSurveyList,
  (filter, surveyList) => {
    switch (filter) {
      default:
        return surveyList;
    }
  }
);

export const getSurveyCount = createSelector(
  getSurveyList,
  surveyList => surveyList.size
);

export const getPartyVoteCount = createSelector(
  getSurveyList,
  surveylist => {
    let votes = [];
    surveylist.forEach((survey) => {
      survey.candidates.forEach((vote) => {
        if (votes[vote.party]) votes[vote.party] += parseInt(vote.votes);
        else {
          votes[vote.party] = vote.votes;
        }
      });
    });
    return votes;
  }
  );
