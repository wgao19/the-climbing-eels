// @flow
// Thanks my beloved team
import type { Action } from '../types/Redux';

export function action(type: string, data: Object = {}): Action {
  return { type, ...data };
}

export type RequestActionType = {
  REQUESTED: string,
  SUCCESS: string,
  FAILED: string,
};

/**
 * All the network requests will have 3 related actions
 * REQUESTED means the network request is just sent
 * SUCCESS means the request is returned with 200 and no error field in response
 * FAILED means either a 50x, 40x, or response contains error field
 */
export function createRequestTypes(name: string): RequestActionType {
  return {
    REQUESTED: `${name}_REQUESTED`,
    SUCCESS: `${name}_SUCCESS`,
    FAILED: `${name}_FAILED`,
  };
}

export function createReducer<S>(
  handlers: {
    [type: string]: (S, any) => S,
  },
  initState: S
) {
  return function(state: S = initState, action: any) {
    if (action && handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
