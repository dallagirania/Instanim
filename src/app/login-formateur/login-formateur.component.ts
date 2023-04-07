import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { NgToastService } from 'ng-angular-popup';
import { Proprietaire } from '../Model/Proprietaire.model';


@Component({
  selector: 'app-login-formateur',
  templateUrl: './login-formateur.component.html',
  styleUrls: ['./login-formateur.component.css']
})
export class LoginFormateurComponent implements OnInit {

  loginForm: FormGroup
  constructor(
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService
  ) {
    let formControls = {
      mdp: new FormControl('', [
        Validators.required,

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ])


    }
    this. loginForm = this.fb.group(formControls)

  }
  get email() { return this. loginForm.get('email') }
  get mdp() { return this. loginForm.get('mdp') }
  
 loginProprietaire() {
    let data = this. loginForm.value;
    console.log(data);
    let proprietaire = new Proprietaire(undefined ,undefined ,undefined ,data.email, data.mdp);
       console.log(proprietaire);
    if(data.email==0||data.mdp==0)
    {this.toast.info({
      detail:'error msg !!',
      summary:'remplir votre champs'
    });}else{
      
    this.service.loginproprietaire(proprietaire).subscribe(

      res => {
        console.log(res);
        let token=res.token;
        localStorage.setItem("mytoken",token);
        localStorage.setItem("user","proprietaire");
        this.router.navigate(['/addanimal']);
      },
      err => {
        console.log(err);
        this.toast.error({
          detail:'error msg',
          summary:'Proprietaire introuvable !!!!'
        });

      }

    )
  }

  }
  ngOnInit(): void {
  }

}

