import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'elegant-form',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class ElegantFormComponent {
  elegantForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.elegantForm = fb.group({
      elegantFormEmailEx: ['', [Validators.required, Validators.email]],
      elegantFormPasswordEx: ['', Validators.required],
    });
  }
}