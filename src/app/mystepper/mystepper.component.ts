import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-mystepper',
  templateUrl: './mystepper.component.html',
  styleUrls: ['./mystepper.component.css']
})
export class MystepperComponent implements OnInit {

  isLinear = false;
  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

}
