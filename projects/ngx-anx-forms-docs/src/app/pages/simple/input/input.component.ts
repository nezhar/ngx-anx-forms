import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TableProp } from '../../../utils/prop-table/prop-table.component';


export const InputProps: TableProp[] = [
  {
    name: 'id',
    type: 'string',
    description: 'Input id',
    example: '[id]="\'input-id\'"',
    default: '\'\''
  },
  {
    name: 'name',
    type: 'string',
    description: 'Input name',
    example: '[name]="\'input-name\'"',
    default: '\'\''
  },
  {
    name: 'title',
    type: 'string',
    description: 'Input title',
    example: '[title]="\'Input title\'"',
    default: '\'\''
  },
  {
    name: 'type',
    type: 'string',
    description: 'Input type (text|email|number...)',
    example: '[type]="\'email\'"',
    default: '\'text\''
  },
  {
    name: 'placeholder',
    type: 'string',
    description: 'Input placeholder',
    example: '[placeholder]="\'Example\'"',
    default: '\'\''
  },
  {
    name: 'readonly',
    type: 'boolean',
    description: 'Set field as readonly',
    example: '[readonly]="true"',
    default: 'false'
  },
  {
    name: 'floatingPlaceholder',
    type: 'boolean',
    description: 'Enable floating placeholder',
    example: '[floatingPlaceholder]="true"',
    default: 'false'
  },
  {
    name: 'min',
    type: 'string',
    description: 'Input min field for type number',
    example: '[min]="\'2\'"',
    default: 'undefined'
  },
  {
    name: 'max',
    type: 'number',
    description: 'Input max field for type number',
    example: '[max]="\'10\'"',
    default: 'undefined'
  },
  {
    name: 'step',
    type: 'number',
    description: 'Input step for type number',
    example: '[step]="\'1\'"',
    default: 'undefined'
  },
  {
    name: 'errors',
    type: '@angular/forms/ValidationErrors',
    description: 'Validation errors for input field.',
    example: '[errors]="{required: true}"',
    default: 'undefined'
  },
  {
    name: 'errorMessages',
    type: '{[key: string]: string}',
    description: 'Key value pairs of error messages to be used in component instance',
    example: '[errorMessages]="{required: \'Please fill up this field\'}"',
    default: '{}'
  }
];


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {

  form: FormGroup;
  code = {
    ts: `this.form = new FormGroup({
  simple: new FormControl('', Validators.required),
  advanced: new FormControl('', Validators.required),
});`,
    html: `<div [formGroup]="form">
  <span>Simple</span>
  <anx-forms-input
    formControlName="simple"
    [errors]="form.get('simple').errors"
  ></anx-forms-input>

  <anx-forms-input
    formControlName="advanced"
    [errors]="form.get('advanced').errors"
    [errorMessages]="{required: 'Please fill up this field'}"
    [placeholder]="'Advanced'"
    [floatingPlaceholder]="true"	
    [id]="'advanced-input'"
    [name]="'advanced'"	
    [title]="'Advanced input'"
    [type]="'email'"
  ></anx-forms-input>
</div>`
  };

  props = InputProps;

  ngOnInit() {
    this.form = new FormGroup({
      simple: new FormControl('', Validators.required),
      advanced: new FormControl('', Validators.required),
    });
  }
}
