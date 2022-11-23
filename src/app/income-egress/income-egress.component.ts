import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IncomeEgressService } from '../services/income-egress.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-income-egress',
  templateUrl: './income-egress.component.html',
  styleUrls: ['./income-egress.component.scss'],
})
export class IncomeEgressComponent implements OnInit {
  incomeEgressForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private incomeEgressService: IncomeEgressService
  ) {}

  ngOnInit(): void {
    this.incomeEgressForm = this.fb.group({
      description: ['', Validators.required],
      amount: ['', Validators.required],
      type: [0],
    });
  }

  save() {
    if (this.incomeEgressForm.invalid) return;

    this.incomeEgressService
      .createIncomeEgress(this.incomeEgressForm.value)
      .then((r) => {
        Swal.fire(
          'Create register',
          this.incomeEgressForm.controls['description'].value,
          'success'
        );
      })
      .catch((err) => Swal.fire('Error register', err.message, 'error'))
      .finally(() => this.incomeEgressForm.reset());

    console.log(this.incomeEgressForm.value);
  }
}
