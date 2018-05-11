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

async function apiLoadGoogleCalendarEvents() {
  await gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES,
  });
  return await gapi.client.calendar.events.list({
    calendarId: CALENDAR_ID,
    timeMin: new Date().toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 10,
    orderBy: 'startTime',
  });
}

const endpointGetClimbs = 'http://localhost:3000/climbs';
async function apiLoadClimbsByDateRange(query) {
  return await __get(
    endpointGetClimbs,
    objectToQueryString({ ...query, ...sortingQuery }),
  );
}

export function loadClimbs(query: { year: number, month: number }) {
  return async function(dispatch: Dispatch) {
    dispatch(action(LOAD_CLIMBS.REQUESTED));
    const response = await apiLoadClimbsByDateRange(query);
    dispatch(
      action(LOAD_CLIMBS.SUCCESS, {
        payload: { climbs: JSON.parse(response) },
      }),
    );
  };
}
