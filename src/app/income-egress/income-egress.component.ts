import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { isLoading, stopLoading } from '../shared/ui.actions';

import { IncomeEgressService } from '../services/income-egress.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-income-egress',
  templateUrl: './income-egress.component.html',
  styleUrls: ['./income-egress.component.scss'],
})
export class IncomeEgressComponent implements OnInit, OnDestroy {
  incomeEgressForm!: FormGroup;
  loading: boolean = false;
  loadingSub!: Subscription;

  constructor(
    private fb: FormBuilder,
    private incomeEgressService: IncomeEgressService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.loadingSub = this.store
      .select('ui')
      .subscribe(({ isLoading }) => (this.loading = isLoading));

    this.incomeEgressForm = this.fb.group({
      description: ['', Validators.required],
      amount: ['', Validators.required],
      type: [0],
    });
  }

  ngOnDestroy(): void {
    this.loadingSub.unsubscribe();
  }

  save() {
    if (this.incomeEgressForm.invalid) return;
    this.store.dispatch(isLoading());

    this.incomeEgressService
      .createIncomeEgress(this.incomeEgressForm.value)
      .then((r) => {
        this.store.dispatch(stopLoading());
        Swal.fire(
          'Create register',
          this.incomeEgressForm.controls['description'].value,
          'success'
        );
      })
      .catch((err) => {
        this.store.dispatch(stopLoading());
        Swal.fire('Error register', err.message, 'error');
      })
      .finally(() => this.incomeEgressForm.reset());

    console.log(this.incomeEgressForm.value);
  }
}
