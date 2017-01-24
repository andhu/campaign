import { Record } from 'immutable';

export const Survey = new Record({
  key: null,
  round: 1, // TODO: Take from a config
  date: null,
  house: null,
  floor: null,
  totalVoters: null,
  candidates: null,
  agent: null,
  contact: null
});
