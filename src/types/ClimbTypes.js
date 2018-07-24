// @flow

import type { GoogleDate, GoogleUser } from './GoogleTypes';

export type ClimberType = {|
  displayName: string,
  email: string,
  responseStatus: string,
|};

export type ClimbType = {|
  attendees?: ClimberType[],
  created: string,
  creator: GoogleUser,
  end: GoogleDate,
  etag: string,
  htmlLink: string,
  iCalUID: string,
  id: string,
  kind: string,
  organizer: GoogleUser,
  sequence: number,
  start: GoogleDate,
  status: string,
  summary: string,
  transparency: string,
  updated: string,
  location?: string,
  description?: string,

  // modified by reducer
  type?: string,
  notes?: string,
|};
