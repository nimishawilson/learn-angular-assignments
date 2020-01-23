import { Component } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signupForm: FormGroup;

   ngOnInit(){
    this.signupForm = new FormGroup({
      'projectName' : new FormControl(null),
      'email' : new FormControl(null),
      'projectStatus': new FormControl(null)
    });
}


onSubmit(){
    console.log(this.signupForm)
  }


}