import {RJSFSchema} from '@rjsf/utils';
import {adminuserdto_UpdateUserPointsReq} from '@/common/openapi';
import {JSONSchema7Definition} from 'json-schema';
import {updatePointsReasons} from '@/common/constants/update-points-reasons';

export const updateUserSchema: RJSFSchema = {
  required: ['kudos_change', 'points_change', 'reason'],
  properties: {
    kudos_change: {
      type: 'number',
      title: 'Điểm uy tín',
      minimum: 1
    },
    points_change: {
      type: 'number',
      title: 'Điểm thưởng',
      minimum: 1,
    },
    reason: {
      type: 'string',
      title: 'Lý do',
      enum: [...updatePointsReasons]
    }
  } satisfies Record<keyof Omit<adminuserdto_UpdateUserPointsReq, 'user_id'>, JSONSchema7Definition>
};
