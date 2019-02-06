import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputProps } from '../input/input.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent implements OnInit {

  form: FormGroup;
  code = {
    ts: `this.form = new FormGroup({
  simple: new FormControl(true, Validators.requiredTrue),
});`,
    html: `<div [formGroup]="form">
  <anx-forms-input-checkbox
      formControlName="simple"
      [errors]="form.get('simple').errors"
  >
      <span>
          Custom <b>Label</b>
      </span>
  </anx-forms-input-checkbox>
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

    this.form = new FormGroup({
      simple: new FormControl(true, Validators.requiredTrue),
    });
  }

}
