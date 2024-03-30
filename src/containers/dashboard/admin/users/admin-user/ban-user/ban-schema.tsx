import {RJSFSchema} from '@rjsf/utils';

const ONE_DAY = 60 * 24;

export const banSchema: RJSFSchema = {
  required: ['duration_mins', 'reason', 'taken_kudos'],

  properties: {
    duration_mins: {type: 'number', title: 'Duration (minutes)', default: ONE_DAY},
    reason: {type: 'string', title: 'Reason', default: ''},
    taken_kudos: {type: 'number', title: 'Taken kudos', default: 10}
  }
};
