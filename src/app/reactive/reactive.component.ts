import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required,
    Validators.minLength(3)]),
    email: new FormControl('', [Validators.required,
    Validators.email]),
    body: new FormControl('', Validators.required)
    });
    get f(){
      return this.form.controls;
      }
      submit(){
        alert(this.form.value);
        }

}
