import { ActionReducerMap } from '@ngrx/store';
import { uiReducer, State } from './shared/ui.reducer';
import { IAuthState, authReducer } from './auth/auth.reducer';

export interface AppState {
  ui: State;
  user: IAuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: uiReducer,
  user: authReducer,
};
