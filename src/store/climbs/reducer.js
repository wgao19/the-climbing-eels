// @flow
import { createReducer } from '../utils';
import { LOAD_GOOGLE_CALENDAR_CLIMBS, LOAD_CLIMBS } from './actions';
import { getDateKey } from './utils';
import { getGymIdKey } from '../gyms/utils';
import type { ClimbType } from '../../types/ClimbTypes';

export type ClimbState = ClimbType[];
// NOTE: breaking the (old) reducer
const initialState: ClimbState = {
  GoogleCalendarClimbs: [],
};

export default createReducer(
  {
    [LOAD_CLIMBS.SUCCESS]: (state, action) => {
      const { climbs } = action.payload;
      if (climbs && climbs.length) {
        const newState = {};
        climbs.map(climb => {
          const { month, year, gymId, date } = climb;
          const dateKey = getDateKey({ month, year, date });
          const gymIdKey = getGymIdKey({ gymId });
          const currentDate = state[dateKey];
          if (!currentDate) {
            newState[dateKey] = {};
          }
          newState[dateKey][gymIdKey] = currentDate
            ? currentDate[gymIdKey].concat([climb])
            : [climb];
        });
        return { ...state, ...newState };
      } else {
        return state;
      }
    },
    // deprecate: old climbs operated by google calendar
    [LOAD_GOOGLE_CALENDAR_CLIMBS.SUCCESS]: (state, action) => {
      action.payload &&
        action.payload.items &&
        action.payload.items.map(item => {
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
      return {
        ...state,
        GoogleCalendarClimbs: action.payload.items,
      };
    },
  },
  initialState,
);
