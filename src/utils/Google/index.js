// @flow
import embedScript from '../embedScript';
import jsonObjectToQueryString from 'utils/jsonObjectToQueryString';
import {
  API_KEY,
  CLIENT_ID,
  DISCOVERY_DOCS,
  SCOPES,
  CALENDAR_ID,
  BASE_ENDPOINT,
} from './constants';

export async function initGoogleClient() {
  gapi.client &&
    (await gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    }));
}

export default function initGoogle(cb: Function) {
  embedScript({
    src: 'https://apis.google.com/js/client.js',
    onLoad: () => {
      gapi.load('client', cb);
    },
  });
}

export async function apiLoadClimbs() {
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
