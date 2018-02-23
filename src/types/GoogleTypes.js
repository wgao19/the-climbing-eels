// @flow

export type GoogleUser = {
  email: string,
  displayName: string,
  self?: boolean,
};

export type GoogleDate = {
  date: string,
};

export type GoogleAPIResult = {
  result: Object,
  body: Object,
  headers: Object,
  status: number,
  statusText: ?string,
};
