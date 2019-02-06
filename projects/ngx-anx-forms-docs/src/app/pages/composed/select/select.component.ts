import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputProps } from '../../simple/input/input.component';
import { TableProp } from '../../../utils/prop-table/prop-table.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {

  form: FormGroup;
  code = {
    ts: `this.options = [
  {value: 1, label: 'Option 1'},
  {value: 2, label: 'Option 2'},
  {value: 3, label: 'Option 3'},
  {value: 4, label: 'Option 4'},
  {value: 5, label: 'Option 5'},
];
  
this.form = new FormGroup({
  simple: new FormControl('', Validators.required),
  advanced: new FormControl('', Validators.required),
});`,
    html: `<div [formGroup]="form">
  <span>Simple</span>
  <anx-forms-input-select
    formControlName="simple"
    [options]="options"
    [bindValue]="'value'"
    [bindLabel]="'label'"
    [errors]="form.get('simple').errors"
  >
    <fa-icon [icon]="faCoffee"></fa-icon>
  </anx-forms-input-select>

  <anx-forms-input-select
    formControlName="advanced"
    [options]="options"
    [bindValue]="'value'"
    [bindLabel]="'label'"
    [errors]="form.get('advanced').errors"
    [errorMessages]="{required: 'Please fill up this field'}"
    [placeholder]="'Advanced'"
    [multiple]="true"
    [clearable]="false"
  >
    <fa-icon [icon]="faCat"></fa-icon>
  </anx-forms-input-select>
</div>`
  };

  props: TableProp[] = [];

  options = [
    {value: 1, label: 'Option 1'},
    {value: 2, label: 'Option 2'},
    {value: 3, label: 'Option 3'},
    {value: 4, label: 'Option 4'},
    {value: 5, label: 'Option 5'},
  ];

  ngOnInit() {
    this.props.push(InputProps.find(prop => prop.name === 'placeholder'));
    this.props.push(
      {
        name: 'options',
        type: '[]',
        description: 'Options to be used inside of select',
        example: '[options]="\'[{pk: 1, name: \'Option 1\'}, {pk: 2, name: \'Option 2\'}\]"',
        default: 'undefined'
      },
      {
        name: 'bindLabel',
        type: 'string',
        description: 'Object property to use for label.',
        example: '[bindLabel]="\'label\'"',
        default: 'undefined'
      },
      {
        name: 'bindValue',
        type: 'string',
        description: 'Object property to use for selected model. By default binds to whole object.',
        example: '[bindValue]="\'pk\'"',
        default: 'undefined'
      },
      {
        name: 'multiple',
        type: 'boolean',
        description: 'Allows to select multiple items.',
        example: '[multiple]="true"',
        default: 'false'
      },
      {
        name: 'notFoundText',
        type: 'string',
        description: 'Set custom text when filter returns empty result',
        example: '[notFoundText]="\'No options\'"',
        default: '-'
      },
      {
        name: 'closeOnSelect',
        type: 'boolean',
        description: 'Whether to close the menu when a value is selected',
        example: '[closeOnSelect]="false"',
        default: 'true'
      },
      {
        name: 'clearable',
        type: 'boolean',
        description: 'Set custom text when filter returns empty result',
        example: '[closeOnSelect]="false"',
        default: 'true'
      }
    );
    this.props.push(InputProps.find(prop => prop.name === 'errors'));
    this.props.push(InputProps.find(prop => prop.name === 'errorMessages'));

    this.form = new FormGroup({
      simple: new FormControl(null, Validators.required),
      advanced: new FormControl(null, Validators.required),
    });
  }

}
