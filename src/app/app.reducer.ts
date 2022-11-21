import { ActionReducerMap } from '@ngrx/store';
import { uiReducer, State } from './shared/ui.reducer';

export interface AppState {
  ui: State;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: uiReducer,
};
