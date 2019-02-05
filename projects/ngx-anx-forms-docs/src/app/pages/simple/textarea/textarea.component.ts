import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputProps } from '../input/input.component';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  form: FormGroup;
  code = {
    ts: `this.form = new FormGroup({
  simple: new FormControl('', Validators.required),
  advanced: new FormControl('', Validators.required),
});`,
    html: `<div [formGroup]="form">
  <span>Simple</span>
  <anx-forms-input-textarea
    formControlName="simple"
    [errors]="form.get('simple').errors"
  ></anx-forms-input-textarea>

  <anx-forms-input-textarea
    formControlName="advanced"
    [errors]="form.get('advanced').errors"
    [errorMessages]="{required: 'Please fill up this field'}"
    [placeholder]="'Advanced'"
    [floatingPlaceholder]="true"
    [id]="'advanced-input'"
    [name]="'advanced'"
    [title]="'Advanced input'"
    [type]="'email'"
  ></anx-forms-input-textarea>
</div>`
  };

  props = InputProps.slice();

  ngOnInit() {
    this.props.splice(this.props.findIndex(prop => prop.name === 'type'), 1);
    this.props.splice(this.props.findIndex(prop => prop.name === 'min'), 1);
    this.props.splice(this.props.findIndex(prop => prop.name === 'max'), 1);
    this.props.splice(this.props.findIndex(prop => prop.name === 'step'), 1);

    this.form = new FormGroup({
      simple: new FormControl('', Validators.required),
      advanced: new FormControl('', Validators.required),
    });
  }

}
