// @flow
import { createReducer } from '../utils';
import { LOAD_CLIMBS } from './actions';
import type { ClimbType } from '../../types/ClimbTypes';

export type ClimbState = ClimbType[];
const initialState: ClimbState = [];

export default createReducer(
  {
    [LOAD_CLIMBS.SUCCESS]: (state, action) => {
      return action.payload.items;
    },
  },
  initialState
);
