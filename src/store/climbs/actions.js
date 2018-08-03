// @flow
import { createRequestTypes, action } from '../utils';
import objectToQueryString from 'utils/jsonObjectToQueryString';
import { __get } from '../../utils/api';
import { apiLoadClimbs } from 'utils/Google';
import { STATUS } from 'utils/Google/constants';

import type { Dispatch } from '../../types/Redux';

export const LOAD_CLIMBS = createRequestTypes('LOAD_CLIMBS');
export const LOAD_GOOGLE_CALENDAR_CLIMBS = createRequestTypes(
  'LOAD_GOOGLE_EVENT_CLIMBS'
);
export const LOAD_CLIMB_DETAIL = createRequestTypes('LOAD_CLIMB_DETAIL');

export const LOAD_CLIMBS_BY_DATE_RANGE = createRequestTypes(
  'LOAD_CLIMBS_BY_DATE_RANGE'
);

export function loadClimbs(query: { year: number, month: number }) {
  return async function(dispatch: Dispatch) {
    dispatch(action(LOAD_CLIMBS.REQUESTED));
    const response = await apiLoadClimbsByDateRange(query);
    dispatch(
      action(LOAD_CLIMBS.SUCCESS, {
        payload: { climbs: JSON.parse(response) },
      })
    );
  };
}

const endpointGetClimbs = 'http://localhost:3000/climbs';

async function apiLoadClimbsByDateRange(query) {
  const sortingQuery = {};
  return await __get(
    endpointGetClimbs,
    objectToQueryString({ ...query, ...sortingQuery })
  );
}

export function loadGoogleCalendarClimbs() {
  return async function(dispatch: Dispatch) {
    dispatch(action(LOAD_GOOGLE_CALENDAR_CLIMBS.REQUESTED));
    const response = await apiLoadClimbs();
    const { result, status, statusText } = response;
    dispatch(
      status === STATUS.SUCCESS
        ? action(LOAD_GOOGLE_CALENDAR_CLIMBS.SUCCESS, { payload: result })
        : action(LOAD_GOOGLE_CALENDAR_CLIMBS.FAILED, { error: statusText })
    );
  };
}
