import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputProps } from '../../simple/input/input.component';
import { faCoffee, faCat } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-input',
  templateUrl: './icon-input.component.html',
})
export class IconInputComponent implements OnInit {

  form: FormGroup;
  code = {
    ts: `this.form = new FormGroup({
  simple: new FormControl('', Validators.required),
  advanced: new FormControl('', Validators.required),
});`,
    html: `<div [formGroup]="form">
  <span>Simple</span>
  <anx-forms-icon-input
    formControlName="simple"
    [errors]="form.get('simple').errors"
  >
    <fa-icon [icon]="faCoffee"></fa-icon>
  </anx-forms-icon-input>

  <anx-forms-icon-input
    formControlName="advanced"
    [errors]="form.get('advanced').errors"
    [errorMessages]="{required: 'Please fill up this field'}"
    [placeholder]="'Advanced'"
    [floatingPlaceholder]="true"
    [id]="'advanced-input'"
    [name]="'advanced'"
    [title]="'Advanced input'"
    [type]="'email'"
  >
    <fa-icon [icon]="faCat"></fa-icon>
  </anx-forms-icon-input>
</div>`
  };

  props = InputProps.slice();

  faCat = faCat;
  faCoffee = faCoffee;

  ngOnInit() {
    this.form = new FormGroup({
      simple: new FormControl('', Validators.required),
      advanced: new FormControl('', Validators.required),
    });
  }

}
