import { ActionReducerMap } from '@ngrx/store';
import { uiReducer, State } from './shared/ui.reducer';
import { IAuthState, authReducer } from './auth/auth.reducer';
import {
  incomeEgressReducer,
  IncomeEgressState,
} from './income-egress/income-egress.reducer';

export interface AppState {
  ui: State;
  user: IAuthState;
  // incomeEgress: IncomeEgressState;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: uiReducer,
  user: authReducer,
  // incomeEgress: incomeEgressReducer,
};
