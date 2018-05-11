// @flow
import objectToQueryString from '../../utils/objectToQueryString';

export const getDateKey = ({ month, year, date }) => {
  return objectToQueryString({ year, month, date });
};

