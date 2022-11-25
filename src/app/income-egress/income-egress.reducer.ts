import { IincomeEgress } from '../../interfaces/income-egress.interface';
import { createReducer, on } from '@ngrx/store';
import { setItems, unSetItems } from './income-egress.actions';
import { AppState } from '../app.reducer';

export interface IncomeEgressState {
  items: IincomeEgress[];
}

export interface AppStateIncomeEgress extends AppState {
  incomeEgress: IncomeEgressState;
}

export const initialStateIncomeEgress: IncomeEgressState = {
  items: [],
};

export const incomeEgressReducer = createReducer(
  initialStateIncomeEgress,
  on(setItems, (state, { items }) => ({ ...state, items: [...items] })),
  on(unSetItems, (state) => ({ ...state, items: [] }))
);
