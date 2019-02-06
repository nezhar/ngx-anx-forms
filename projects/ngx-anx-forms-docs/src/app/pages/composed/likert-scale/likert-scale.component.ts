import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputProps } from '../../simple/input/input.component';
import { TableProp } from '../../../utils/prop-table/prop-table.component';

@Component({
  selector: 'app-likert-scale',
  templateUrl: './likert-scale.component.html',
})
export class LikertScaleComponent implements OnInit {

form: FormGroup;
  code = {
    ts: `this.form = new FormGroup({
  simple: new FormControl(null, Validators.required),
});`,
    html: `<div [formGroup]="form">
  <anx-forms-input-likert-scale
    formControlName="simple"
    [errors]="form.get('simple').errors"
    [minAnswer]="1"
    [maxAnswer]="10"
    [minAnswerInfo]="'Min'"
    [maxAnswerInfo]="'Max'"
  ></anx-forms-input-likert-scale>
</div>`
  };

  props: TableProp[] = [];

  ngOnInit() {
    this.props.push(InputProps.find(prop => prop.name === 'placeholder'));
    this.props.push(
      {
        name: 'minAnswer',
        type: 'number',
        description: 'Options to be used inside of select',
        example: '[minAnswer]="\'5\'"',
        default: '1'
      },
      {
        name: 'maxAnswer',
        type: 'number',
        description: 'Object property to use for label.',
        example: '[maxAnswer]="\'15\'"',
        default: '5'
      },
      {
        name: 'minAnswerInfo',
        type: 'string',
        description: 'Object property to use for selected model. By default binds to whole object.',
        example: '[minAnswerInfo]="\'Min value\'"',
        default: 'undefined'
      },
      {
        name: 'maxAnswerInfo',
        type: 'string',
        description: 'Object property to use for selected model. By default binds to whole object.',
        example: '[minAnswerInfo]="\'Max value\'"',
        default: 'undefined'
      }
    );
    this.props.push(InputProps.find(prop => prop.name === 'errors'));
    this.props.push(InputProps.find(prop => prop.name === 'errorMessages'));

    this.form = new FormGroup({
      simple: new FormControl(null, Validators.required),
    });
  }

}
