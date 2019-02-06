import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-distributed-multiple-choice',
  templateUrl: './distributed-multiple-choice.component.html',
})
export class DistributedMultipleChoiceComponent implements OnInit {

  form: FormGroup;
  code = {
    ts: `weightingTypes = [
  {key: 'EASY', label: 'Easy'},
  {key: 'MEDIUM', label: 'Medium'},
  {key: 'Hard', label: 'Hard'},
];
options = [
  {label: 'Option 1', pk: 1},
  {label: 'Option 2', pk: 2},
  {label: 'Option 3', pk: 3},
  {label: 'Option 4', pk: 4},
  {label: 'Option 5', pk: 5},
  {label: 'Option 6', pk: 6},
  {label: 'Option 7', pk: 7},
  {label: 'Option 8', pk: 8},
  {label: 'Option 9', pk: 9},
];
placeholder = 'Click to select...';
    
this.form = new FormGroup({
  simple: new FormControl(null, Validators.required),
});`,
    html: `<div [formGroup]="form">
  <anx-forms-input-distributed-multiple-choice
    formControlName="simple"
    [weightingTypes]="weightingTypes"
    [bindLabel]="'label'"
    [bindValue]="'pk'"
    [options]="options"
    [placeholder]="placeholder"
    [errors]="form.get('simple').errors"
  ></anx-forms-input-distributed-multiple-choice>
</div>`
  };

  weightingTypes = [
    {key: 'EASY', label: 'Easy'},
    {key: 'MEDIUM', label: 'Medium'},
    {key: 'Hard', label: 'Hard'},
  ];
  options = [
    {label: 'Option 1', pk: 1},
    {label: 'Option 2', pk: 2},
    {label: 'Option 3', pk: 3},
    {label: 'Option 4', pk: 4},
    {label: 'Option 5', pk: 5},
    {label: 'Option 6', pk: 6},
    {label: 'Option 7', pk: 7},
    {label: 'Option 8', pk: 8},
    {label: 'Option 9', pk: 9},
  ];
  placeholder = 'Click to select...';

  ngOnInit() {
    this.form = new FormGroup({
      simple: new FormControl(null, Validators.required),
    });
  }
}
