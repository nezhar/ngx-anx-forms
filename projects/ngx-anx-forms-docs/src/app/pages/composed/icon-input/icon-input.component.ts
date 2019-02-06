import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputProps } from '../../simple/input/input.component';

@Component({
  selector: 'app-icon-input',
  templateUrl: './icon-input.component.html',
})
export class IconInputComponent implements OnInit {

  form: FormGroup;
  code = {
    ts: `this.form = new FormGroup({
  simple: new FormControl('', Validators.required),
});`,
    html: `<div [formGroup]="form">
  <anx-forms-input-radio formControlName="simple" [radioValue]="null">
      <span>
          Custom <b>Label 1</b>
      </span>
  </anx-forms-input-radio>
  <br>
  <anx-forms-input-radio formControlName="simple" [radioValue]="1">
      <span>
          Custom <b>Label 2</b>
      </span>
  </anx-forms-input-radio>
  <br>
  <anx-forms-input-radio formControlName="simple" [radioValue]="'Test'">
      <span>
          Custom <b>Label 3</b>
      </span>
  </anx-forms-input-radio>
</div>
`
  };

  props = InputProps.slice();

  ngOnInit() {
    this.props.splice(this.props.findIndex(prop => prop.name === 'type'), 1);
    this.props.splice(this.props.findIndex(prop => prop.name === 'min'), 1);
    this.props.splice(this.props.findIndex(prop => prop.name === 'max'), 1);
    this.props.splice(this.props.findIndex(prop => prop.name === 'step'), 1);
    this.props.splice(this.props.findIndex(prop => prop.name === 'placeholder'), 1);
    this.props.splice(this.props.findIndex(prop => prop.name === 'floatingPlaceholder'), 1);

    this.props.push({
      name: 'radioValue',
      type: 'any',
      description: 'Value of selected radio button',
      example: '[radioValue]="\'Value\'"',
      default: '\'\''
    });

    this.form = new FormGroup({
      simple: new FormControl('', Validators.required),
    });
  }

}
