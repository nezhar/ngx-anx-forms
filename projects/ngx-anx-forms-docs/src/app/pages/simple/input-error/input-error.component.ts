import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputProps } from '../input/input.component';
import { TableProp } from '../../../utils/prop-table/prop-table.component';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
})
export class InputErrorComponent implements OnInit {

  form: FormGroup;
  code = {
    ts: `errors = {
  serverErrors: [
    'Error 1',
    'Error 2',
  ],
  required: true,
  min: true,
  custom1: true,
  custom2: true,
};
errorMessages = {
  min: 'This value should be higher',
  custom1: 'Custom error messages',
};`,
    html: `<div [formGroup]="form">
  <anx-forms-input-error
      [errors]="errors"
      [errorMessages]="errorsMessages"
  ></anx-forms-input-error>
</div>`
  };

  props: TableProp[] = [];
  errors = {
    serverErrors: [
      'Error 1',
      'Error 2',
    ],
    required: true,
    min: true,
    custom1: true,
    custom2: true,
  };
  errorMessages = {
    min: 'This value should be higher',
    custom1: 'Custom error messages',
  };

  ngOnInit() {
    this.props.push(InputProps.find(prop => prop.name === 'errors'));
    this.props.push(InputProps.find(prop => prop.name === 'errorMessages'));
  }

}
