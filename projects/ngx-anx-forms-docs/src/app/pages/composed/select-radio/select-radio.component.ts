import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TableProp } from '../../../utils/prop-table/prop-table.component';
import { InputProps } from '../../simple/input/input.component';

@Component({
  selector: 'app-select-radio',
  templateUrl: './select-radio.component.html',
})
export class SelectRadioComponent implements OnInit {

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
  simple: new FormControl(null, Validators.required),
});`,
    html: `<div [formGroup]="form">
  <anx-forms-input-select-radio
    formControlName="simple"
    [options]="options"
    [bindValue]="'value'"
    [bindLabel]="'label'"
    [errors]="form.get('simple').errors"
  >
    Label for input
  </anx-forms-input-select-radio>
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
    );
    this.props.push(InputProps.find(prop => prop.name === 'errors'));
    this.props.push(InputProps.find(prop => prop.name === 'errorMessages'));

    this.form = new FormGroup({
      simple: new FormControl(null, Validators.required),
    });
  }

}
