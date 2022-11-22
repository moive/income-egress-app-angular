import { createReducer, on } from '@ngrx/store';
import { IUser } from 'src/interfaces/user.interface';
import { setUser, unSetUser } from './auth.actions';

export interface IAuthState {
  user: IUser | null;
}

export const initialState: IAuthState = {
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(setUser, (state, { user }) => ({ ...state, user: { ...user } })),
  on(unSetUser, (state) => ({ ...state, user: null }))
);
