import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  authState,
} from '@angular/fire/auth';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  initAuthListener() {
    onAuthStateChanged(this.auth, (user) => {
      console.log(user);
      console.log(user?.uid);
      console.log(user?.email);
    });
  }

  // fix https://www.youtube.com/watch?v=8VTxuIvMTlc

  createUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
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
