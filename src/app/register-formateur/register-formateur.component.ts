import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../Service/crud.service';
import { NgToastService } from 'ng-angular-popup';
import { Proprietaire } from '../Model/Proprietaire.model';
@Component({
  selector: 'app-register-formateur',
  templateUrl: './register-formateur.component.html',
  styleUrls: ['./register-formateur.component.css']
})
export class RegisterFormateurComponent implements OnInit {
  signUpForm:FormGroup
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
      // img: new FormControl('', [
      //   Validators.required,

      // ]),
      prenom: new FormControl('', [
        Validators.required,

      ]),
      mdp: new FormControl('', [
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
  // get img() { return this.signUpForm.get('img') }
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
  

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Sauf les images sont acceptés.';
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }
  
  registerProprietaire() {
    let data = this.signUpForm.value;
    console.log(data);
    let proprietaire = new Proprietaire(
      undefined,data.nom,data.prenom,data.email,data.mdp);
       console.log(proprietaire);
    if(data.nom==0||data.prenom==0||data.email==0||data.mdp==0||data.adr==0||data.tel==0)
    {this.toast.info({
      detail:'error msg !!',
      summary:'remplir votre champs'
    });}else{
      
    this.service.addProprietaire(proprietaire).subscribe(

      res => {
        console.log(res);
        this.router.navigate(['/loginProprietaire']);
      },
      err => {
        console.log(err);
        this.toast.error({
          detail:'error msg',
          summary:'verifier votre formulaire !'
        });

      }

    )
  }

  }

  ngOnInit(): void {
  }

}
