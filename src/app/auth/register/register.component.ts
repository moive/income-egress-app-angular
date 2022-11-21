import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { isLoading, stopLoading } from '../../shared/ui.actions';

import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm!: FormGroup;
  loading: boolean = false;
  uiSubscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.uiSubscription = this.store
      .select('ui')
      .subscribe((ui) => (this.loading = ui.isLoading));
  }

  ngOnDestroy(): void {
    this.uiSubscription.unsubscribe();
  }

  createUser() {
    if (this.registerForm.invalid) return;

    this.store.dispatch(isLoading());
    // Swal.fire({
    //   title: 'One moment please',
    //   timerProgressBar: true,
    //   didOpen: () => {
    //     Swal.showLoading(null);
    //   },
    // });

    const { username, email, password } = this.registerForm.value;
    this.authService
      .createUser({ name: username, email, password } as any)
      .then((credential) => {
        console.log(credential);
        // Swal.close();
        this.store.dispatch(stopLoading());
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.log(err.message);
        this.store.dispatch(stopLoading());
        Swal.fire({
          icon: 'error',
          title: 'Ooops',
          text: err.message,
        });
      });
  }
}
