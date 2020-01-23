import { Component } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signupForm: FormGroup;
  public projectName: string;
   public email: any;
    public projectStatus: string;
  forbiddenProjectNames = ['test'];
 
   ngOnInit(){
    this.signupForm = new FormGroup({
      'projectName' : new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    });
}

  forbiddenNames(control: FormControl): { [s:string]: boolean } {
    if(this.forbiddenProjectNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

onSubmit(){
   console.log('--------')
    console.log(this.signupForm.value.projectName)
   this.projectName = this.signupForm.value.projectName;
   this.email =  this.signupForm.value.email;
   this.projectStatus = this.signupForm.value.projectStatus;
  }


}