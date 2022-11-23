import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  authState,
} from '@angular/fire/auth';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';

import { map, Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { unSetUser, setUser } from '../auth/auth.actions';

import { IUser } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userSubscription!: Subscription;

  private _user: IUser | null = null;

  get user() {
    return this._user;
  }

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private store: Store
  ) {}

  initAuthListener() {
    authState(this.auth).subscribe((fuser) => {
      if (fuser) {
        const userRef = collection(this.firestore, 'users');
        this.userSubscription = collectionData(userRef, { idField: 'id' })
          .pipe(
            map((val) => val.filter((r: any) => r.email === fuser.email)[0])
          )
          .subscribe((user: any) => {
            this._user = user;
            this.store.dispatch(setUser({ user }));
          });
      } else {
        if (this.userSubscription) {
          this.userSubscription.unsubscribe();
        }
        this._user = null;
        this.store.dispatch(unSetUser());
      }
    });
  }

  // fix https://www.youtube.com/watch?v=8VTxuIvMTlc
  // crud: https://www.youtube.com/watch?v=t_YSrxj0wGY

  createUser(user: IUser) {
    return createUserWithEmailAndPassword(
      this.auth,
      user.email,
      user.password
    ).then(() => {
      const userRef = collection(this.firestore, 'users');
      return addDoc(userRef, user);
    });
  }

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  logout() {
    return this.auth.signOut();
  }
  isAuth() {
    return authState(this.auth).pipe(map((fUser) => fUser != null));
  }
}
