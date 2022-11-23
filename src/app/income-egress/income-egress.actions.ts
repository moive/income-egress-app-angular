import { createAction, props } from '@ngrx/store';
import { IincomeEgress } from '../../interfaces/income-egress.interface';
export const unSetItems = createAction('[IncomeEgress] Unset Items');

export const setItems = createAction(
  '[IncomeEgress] Set Items',
  props<{ items: IincomeEgress[] }>()
);
