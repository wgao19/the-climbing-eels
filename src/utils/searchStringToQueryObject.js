// @flow

export default (search: string) =>
  search && search[0] === '?'
    ? search
        .slice(1)
        .split('&')
        .map(query => {
          const [key, value] = query.split('=');
          return { [key]: value };
        })
        .reduce((prev, next) => ({ ...prev, ...next }))
    : {};
