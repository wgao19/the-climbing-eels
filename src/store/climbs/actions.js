// @flow
import { createRequestTypes, action } from '../utils';
import { __get } from '../../utils/api';
import { STATUS } from '../../utils/Google/constants';
import { apiLoadClimbs } from 'utils/Google';

export const LOAD_CLIMBS = createRequestTypes('LOAD_CLIMBS');
export const LOAD_CLIMB_DETAIL = createRequestTypes('LOAD_CLIMB_DETAIL');

import type { Dispatch } from '../../types/Redux';

export const LOAD_CLIMBS_BY_DATE_RANGE = createRequestTypes(
  'LOAD_CLIMBS_BY_DATE_RANGE'
);

async function apiLoadClimbsByDateRange() {
  return await __get('http://localhost:3000/climbs');
}

export function loadClimbs() {
  return async function(dispatch: Dispatch) {
    dispatch(action(LOAD_CLIMBS.REQUESTED));
    const response = await apiLoadClimbs();
    const { result, status, statusText } = response;
    dispatch(
      status === STATUS.SUCCESS
        ? action(LOAD_CLIMBS.SUCCESS, { payload: result })
        : action(LOAD_CLIMBS.FAILED, { error: statusText })
    );
  };
}

export function loadClimbsByDateRange() {
  return async function(dispatch: Dispatch) {
    dispatch(action(LOAD_CLIMBS_BY_DATE_RANGE.REQUESTED));
    const response = await apiLoadClimbsByDateRange();
    dispatch(
      action(LOAD_CLIMBS_BY_DATE_RANGE.SUCCESS, {
        payload: JSON.parse(response),
      })
    );
  };
}
