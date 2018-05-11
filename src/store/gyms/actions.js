// @flow
import { createRequestTypes, action } from '../utils';

import { __get } from '../../utils/api';
import type { Dispatch } from '../../types/Redux';

export const LOAD_GYMS = createRequestTypes('LOAD_GYMS');


const endpointGyms = 'http://localhost:3000/gyms';

async function apiLoadGyms() {
  return await __get(
    endpointGyms,
  );
}
export function loadGyms() {
  return async function(dispatch: Dispatch) {
    dispatch(action(LOAD_GYMS.REQUESTED));
    const response = await apiLoadGyms();
    dispatch(
      action(LOAD_GYMS.SUCCESS, {
        payload: { gyms: JSON.parse(response) },
      }),
    );
  };
}
