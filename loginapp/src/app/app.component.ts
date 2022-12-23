import { Component } from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'loginapp';
  public devWidth = window.innerWidth;
  userName = new FormControl('', [Validators.required, Validators.min(10)]);
  password = new FormControl('', [Validators.required, Validators.min(10), this.checkPasswordCharacters()]);
  message = new Map<string, string>()

  getUserNameErrors() {
    if(this.userName.dirty && this.userName.hasError('required')) {
      this.message.set("userName.required","User name not provided. Please give registered user name to continue")
    } else {
      this.message.delete("userName.required")
    }

    if(this.userName.dirty && this.userName.hasError("min")) {
      this.message.set("userName.min","User name must be of minimum 10 alpha numeric characters")
    } else {
      this.message.delete("userName.min")
    }
  }

  getPasswordErrors() {
    if(this.password.dirty && this.password.hasError('required')) {
      this.message.set("password.required","Password not provided. Please give password to continue")
    } else {
      this.message.delete("password.required")
    }

    if(this.password.dirty && this.password.hasError("min")) {
      this.message.set("password.min", "Password must be of minimum 10 alpha numeric characters")
    } else {
      this.message.delete("password.min")
    }

    if(this.password.invalid && this.password.hasError("message"))
      this.message.set("password.message","Password can only have characters 0 to 9, a to z, A to Z, -,@,#,.,+")
    else
      this.message.delete("password.message")

  }

  checkPasswordCharacters(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value?.match(/^[-@.#+\w\s]*$/) ? {message: ''}:null;
    }
  }

  submit() {

    console.log("Submit pressed")
  }
}
