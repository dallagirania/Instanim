import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  type: string = "password";
  type2: string = "password";
  isText: boolean= false;
  isText2: boolean= false;
  eyeIcon: string = "bi-eye-slash";
  eyeIcon2: string = "bi-eye-slash";
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      cpassword: ['',Validators.required],
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText? this.eyeIcon = "bi-eye" : this.eyeIcon = "bi-eye-slash";
    this.isText? this.type ="text" : this.type="password";
  }
  hideShowCPass(){
    this.isText2 = !this.isText2;
    this.isText2? this.eyeIcon2 = "bi-eye" : this.eyeIcon2 = "bi-eye-slash";
    this.isText2? this.type2 ="text" : this.type2="password";
  }

}
