// @flow
import { createRequestTypes, action } from '../utils';
import jsonObjectToQueryString from 'utils/jsonObjectToQueryString';
import {
  API_KEY,
  CLIENT_ID,
  DISCOVERY_DOCS,
  SCOPES,
  CALENDAR_ID,
  STATUS,
  BASE_ENDPOINT,
} from '../../utils/Google/constants';
import type { Dispatch } from '../../types/Redux';

export const LOAD_CLIMBS = createRequestTypes('LOAD_CLIMBS');
export const LOAD_CLIMB_DETAIL = createRequestTypes('LOAD_CLIMB_DETAIL');

declare var gapi: Object;

export async function apiInitGoogleCalendar() {
  await gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES,
  });
}

async function apiLoadClimbs() {
  return gapi.client.request({
    path: `${BASE_ENDPOINT}/calendars/${CALENDAR_ID}/events?${jsonObjectToQueryString(
      {
        calendarId: CALENDAR_ID,
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 20,
        orderBy: 'startTime',
      }
    )}`,
  });
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
