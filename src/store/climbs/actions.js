// @flow
import { createRequestTypes, action } from '../utils';
import { STATUS } from '../../utils/Google/constants';
import { apiLoadClimbs } from 'utils/Google';
import type { Dispatch } from '../../types/Redux';

export const LOAD_CLIMBS = createRequestTypes('LOAD_CLIMBS');
export const LOAD_CLIMB_DETAIL = createRequestTypes('LOAD_CLIMB_DETAIL');

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
