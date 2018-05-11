// @flow
import { createReducer } from '../utils';
import { LOAD_GYMS } from './actions';
import type { GymType } from '../../types/GymTypes';

export type GymState = GymType[];
const initialState: GymState = [];

export default createReducer(
  {
    [LOAD_GYMS.SUCCESS]: (state, action) => action.payload.gyms,
  },
  initialState,
);
