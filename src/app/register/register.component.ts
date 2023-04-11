import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Proprietaire } from '../Model/Proprietaire.model';

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
  mail:any
  userFile:any
  message?:String
  imgURL:any
  imagePath:any
  constructor( 
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService
  ) {
    let formControls = {
      nom: new FormControl('', [
        Validators.required,

      ]),
      prenom: new FormControl('', [
        Validators.required,

      ]),
      mdp: new FormControl('', [
        Validators.required,

      ]),
      cmdp: new FormControl('', [
        Validators.required,

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ]),
    }
    this.signUpForm= this.fb.group(formControls)

  }
  get email() { return this.signUpForm.get('email') }
  get nom() { return this.signUpForm.get('nom') }
  get prenom() { return this.signUpForm.get('prenom') }
  get mdp() { return this.signUpForm.get('mdp') }
  get cmdp() { return this.signUpForm.get('cmdp') }
 
  
  registerProprietaire() {
    let data = this.signUpForm.value;
    console.log(data);
    let proprietaire = new Proprietaire(
      undefined,data.nom,data.prenom,data.email,data.mdp);
       console.log(proprietaire);
    if(data.nom==0||data.prenom==0||data.email==0||data.mdp==0||data.cmdp==0)
    {this.toast.info({
      detail:'error msg !!',
      summary:'Fil In Your Fields'
    });}else if(data.mdp!=data.cmdp){
      this.toast.info({
        detail:'error msg !!',
        summary:'Verify yourPassword'
      });
    }
     else{

    this.service.addProprietaire(proprietaire).subscribe(

      res => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      err => {
        console.log(err);
        this.toast.error({
          detail:'error msg',
          summary:'Check Your Form!'
        });

      }

    )
  }

  }


  ngOnInit(): void {
   
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
