import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-switches',
  templateUrl: './form-switches.component.html',
})
export class FormSwitchesComponent {

  @Input() form: FormGroup;

  markAsTouched() {
    for (let inner in this.form.controls) {
      this.form.get(inner).markAsTouched();
    }
  }

  markAsDirty() {
    for (let inner in this.form.controls) {
      this.form.get(inner).markAsDirty();
    }
  }

  markAsUntouched() {
    for (let inner in this.form.controls) {
      this.form.get(inner).markAsUntouched();
    }
  }

  markAsPrestine() {
    for (let inner in this.form.controls) {
      this.form.get(inner).markAsPristine();
    }
  }
}
