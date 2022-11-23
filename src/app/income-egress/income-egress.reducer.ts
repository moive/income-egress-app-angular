import { IincomeEgress } from '../../interfaces/income-egress.interface';
import { createReducer, on } from '@ngrx/store';
import { setItems, unSetItems } from './income-egress.actions';

export interface IncomeEgressState {
  items: IincomeEgress[];
}

export const initialStateIncomeEgress: IncomeEgressState = {
  items: [],
};

export const incomeEgressReducer = createReducer(
  initialStateIncomeEgress,
  on(setItems, (state, { items }) => ({ ...state, items: [...items] })),
  on(unSetItems, (state) => ({ ...state, items: [] }))
);
