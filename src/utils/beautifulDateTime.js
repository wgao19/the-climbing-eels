// @flow

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

export default function beautifulDateTime(dateTime: Date): string {
  return dateTime.toLocaleTimeString('en-US', options);
}
