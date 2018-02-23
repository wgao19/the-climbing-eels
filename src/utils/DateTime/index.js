// @flow

const options = {
  weekday: "long", year: "numeric", month: "short",
  day: "numeric", hour: "2-digit", minute: "2-digit"
};

export function beautifulDateTime(dateTime) {
  return dateTime.toLocaleTimeString(dateTime, options);
}
