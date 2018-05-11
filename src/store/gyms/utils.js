// @flow
import objectToQueryString from '../../utils/objectToQueryString';

export const getGymIdKey = ({ gymId }) => objectToQueryString({ gymId });
