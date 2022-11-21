import { ActionReducerMap } from '@ngrx/store';
import { uiReducer, State } from './shared/ui.reducer';

interface AppState {
  ui: State;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: uiReducer,
};
