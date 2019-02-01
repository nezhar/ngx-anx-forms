import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  form: FormGroup;
  code = {
    ts: `this.form = new FormGroup({
  'input': new FormControl('', Validators.required),
});`,
    html: `<div [formGroup]="form">
  <anx-forms-input
    formControlName="input"
    [errors]="form.get('input').errors"
  ></anx-forms-input>
</div>`
  };

  ngOnInit() {
    this.form = new FormGroup({
      'input': new FormControl('', Validators.required),
    });
  }
  
}
