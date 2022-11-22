import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/interfaces/user.interface';
import { User } from '../models/user.model';

export const setUser = createAction('[Auth] setUser', props<{ user: IUser }>());

export const unSetUser = createAction('[Auth] unSetUser');
