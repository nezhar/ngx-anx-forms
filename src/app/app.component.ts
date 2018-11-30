import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'al-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-library';
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      'test_text': new FormControl('', Validators.required),
      'test_textarea': new FormControl('', Validators.required),
      'test_checkbox': new FormControl(false, Validators.requiredTrue),
      'test_radio': new FormControl(false),
      'test_select': new FormControl(null, Validators.required),
      'test_select_checkbox': new FormControl([], Validators.required),
      'test_select_radio': new FormControl(null, Validators.required),
    });
  }

  selectOptions = [
    {pk: 1, label: 'Option 1'},
    {pk: 2, label: 'Option 2'},
    {pk: 3, label: 'Option 3'},
    {pk: 4, label: 'Option 4'},
    {pk: 5, label: 'Option 5'}
  ]

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
