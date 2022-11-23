import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent implements OnInit {
  @Input() loading: boolean = false;
  @Input() isInvalid: boolean = true;
  @Input() label: string = 'Save';
  @Input() labelLoading: string = 'Waiting...';

  constructor() {}

  ngOnInit(): void {}
}
