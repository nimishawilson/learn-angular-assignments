import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) signupForm: NgForm;
  user = {
    email: '',
    password: '',
    subscriptions: ''
  };
  defaultSubscription = 'Advanced';


  onSubmit(){
  //  this.submitted = true;
    this.user.email = this.signupForm.value.userData.email;
    this.user.password = this.signupForm.value.userData.password;
    this.user.subscriptions = this.signupForm.value.subscriptions;
    this.signupForm.reset();
    console.log('email: '+this.user.email)
    console.log('password: '+this.user.password)
    console.log('subscriptions: '+this.user.subscriptions)
    console.log('-----------------')
  }

}
