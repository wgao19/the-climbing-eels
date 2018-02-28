// @flow
import { createReducer } from '../utils';
import { LOAD_CLIMBS } from './actions';
import type { ClimbType } from '../../types/ClimbTypes';

export type ClimbState = ClimbType[];
const initialState: ClimbState = [];

export default createReducer(
  {
    [LOAD_CLIMBS.SUCCESS]: (state, action) => {
      action.payload && action.payload.items && action.payload.items.map(item => {
        if (item.description) {
          const { type, notes } = JSON.parse(item.description);
          if (type) {
            item.type = type;
          }
          if (notes) {
            item.notes = notes;
          }
        }
      });
      return action.payload.items;
    },
  },
  initialState
);
