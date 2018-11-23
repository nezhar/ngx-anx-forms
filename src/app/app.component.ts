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
    });
  }

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
