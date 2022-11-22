import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-income-egress',
  templateUrl: './income-egress.component.html',
  styleUrls: ['./income-egress.component.scss'],
})
export class IncomeEgressComponent implements OnInit {
  incomeEgressForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.incomeEgressForm = this.fb.group({
      description: ['', Validators.required],
      amount: ['', Validators.required],
      type: [0],
    });
  }

  save() {
    if (this.incomeEgressForm.invalid) return;
    console.log(this.incomeEgressForm.value);
  }
}
