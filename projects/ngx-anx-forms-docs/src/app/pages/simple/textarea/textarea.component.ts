import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  form: FormGroup;
  code = {
    ts: `this.form = new FormGroup({
  'input': new FormControl('', Validators.required),
});`,
    html: `<div [formGroup]="form">
  <anx-forms-input-textarea
    formControlName="input"
    [errors]="textareaForm.get('input').errors"
  ></anx-forms-input-textarea>
</div>`
  };

  ngOnInit() {
    this.form = new FormGroup({
      'input': new FormControl('', Validators.required),
    });
  }

}
