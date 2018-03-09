// @flow
import { createRequestTypes, action } from '../utils';
import {
  API_KEY,
  CLIENT_ID,
  DISCOVERY_DOCS,
  SCOPES,
  CALENDAR_ID,
  STATUS,
} from '../../utils/Google/constants';
import type { Dispatch } from '../../types/Redux';

export const LOAD_CLIMBS = createRequestTypes('LOAD_CLIMBS');

declare var gapi: Object;

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

export function loadClimbs() {
  return async function(dispatch: Dispatch) {
    dispatch(action(LOAD_CLIMBS.REQUESTED));
    const response = await apiLoadGoogleCalendarEvents();
    const { result, status, statusText } = response;
    dispatch(
      status === STATUS.SUCCESS
        ? action(LOAD_CLIMBS.SUCCESS, { payload: result })
        : action(LOAD_CLIMBS.FAILED, { error: statusText })
    );
  };
}
