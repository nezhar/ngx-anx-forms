import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  inputForm: FormGroup;

  ngOnInit() {
    this.inputForm = new FormGroup({
      'input': new FormControl('', Validators.required),
    });
  }

}
