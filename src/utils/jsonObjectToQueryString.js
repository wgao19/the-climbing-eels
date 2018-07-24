// @flow
export default function jsonToQueryString(
  json: Object,
  noQuestionMark: boolean = false
) {
  const str = Object.keys(json)
    .filter(key => {
      const val = json[key];
      return val !== undefined && val !== null;
    })
    .sort()
    .map(function(key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    })
    .join('&');
  if (noQuestionMark) {
    return str;
  } else {
    return '?' + str;
  }
}
