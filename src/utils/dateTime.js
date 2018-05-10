// @flow

const DEFAULT_OPTION = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

export function beautifulDateTime(
  dateTime: Date,
  options?: Object = DEFAULT_OPTION
): string {
  return dateTime.toLocaleString('en-US', options);
}

export function daysInMonth (year, month) {
  return new Date(year, month, 0).getDate();
}
