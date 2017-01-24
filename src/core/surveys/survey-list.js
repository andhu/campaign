import { FirebaseList } from 'core/firebase';
import { surveyActions } from './actions';
import { Survey } from './survey';

export const surveyList = new FirebaseList({
  onAdd: surveyActions.createSurveySuccess,
  onChange: surveyActions.updateSurveySuccess,
  onLoad: surveyActions.loadSurveysSuccess,
  onRemove: surveyActions.removeSurveySuccess
}, Survey);
