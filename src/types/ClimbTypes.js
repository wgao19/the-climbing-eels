// @flow

import type { GoogleDate, GoogleUser} from './GoogleTypes';

export type ClimbType = {
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
};
