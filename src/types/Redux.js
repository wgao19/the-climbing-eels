// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { ClimbState } from '../store/climbs/reducer';

export type Action = {
  type: string,
  [key: string]: any,
};
export type State = {
  climbs: ClimbState,
};
export type Store = ReduxStore<State, Action>;

export type GetState = () => State;

export type Dispatch = ReduxDispatch<Action>;
