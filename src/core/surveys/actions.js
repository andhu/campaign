import { onSubmitActions } from 'redux-form-submit-saga';

export const surveyActions = {
  CREATE_SURVEY: 'CREATE_SURVEY',
  CREATE_SURVEY_SUCCESS: 'CREATE_SURVEY_SUCCESS',
  CREATE_SURVEY_FAILED: 'CREATE_SURVEY_FAILED',

  REMOVE_SURVEY: 'REMOVE_SURVEY',
  REMOVE_SURVEY_FAILED: 'REMOVE_SURVEY_FAILED',
  REMOVE_SURVEY_SUCCESS: 'REMOVE_SURVEY_SUCCESS',

  UPDATE_SURVEY: 'UPDATE_SURVEY',
  UPDATE_SURVEY_FAILED: 'UPDATE_SURVEY_FAILED',
  UPDATE_SURVEY_SUCCESS: 'UPDATE_SURVEY_SUCCESS',

  FILTER_SURVEYS: 'FILTER_SURVEYS',
  LOAD_SURVEYS_SUCCESS: 'LOAD_SURVEYS_SUCCESS',

  handleCreateSurvey: () => onSubmitActions(
    surveyActions.createSurvey,
    surveyActions.CREATE_SURVEY_SUCCESS,
    surveyActions.CREATE_SURVEY_FAILED,
  ),

  createSurvey: survey => ({
    type: surveyActions.CREATE_SURVEY,
    payload: { survey }
  }),

  createSurveyFailed: error => ({
    type: surveyActions.CREATE_SURVEY_FAILED,
    payload: { error }
  }),

  createSurveySuccess: survey => ({
    type: surveyActions.CREATE_SURVEY_SUCCESS,
    payload: { survey }
  }),

  removeSurvey: survey => ({
    type: surveyActions.REMOVE_SURVEY,
    payload: { survey }
  }),

  removeSurveyFailed: error => ({
    type: surveyActions.REMOVE_SURVEY_FAILED,
    payload: { error }
  }),

  removeSurveySuccess: survey => ({
    type: surveyActions.REMOVE_SURVEY_SUCCESS,
    payload: { survey }
  }),

  updateSurvey: (survey, changes) => ({
    type: surveyActions.UPDATE_SURVEY,
    payload: { survey, changes }
  }),

  updateSurveyFailed: error => ({
    type: surveyActions.UPDATE_SURVEY_FAILED,
    payload: { error }
  }),

  updateSurveySuccess: survey => ({
    type: surveyActions.UPDATE_SURVEY_SUCCESS,
    payload: { survey }
  }),

  filterSurveys: filterType => ({
    type: surveyActions.FILTER_SURVEYS,
    payload: { filterType }
  }),

  loadSurveysSuccess: surveys => ({
    type: surveyActions.LOAD_SURVEYS_SUCCESS,
    payload: { surveys }
  })
};
