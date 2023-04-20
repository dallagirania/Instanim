import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Animal } from '../Model/Animal.model';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Proprietaire } from '../Model/Proprietaire.model';

@Component({
  selector: 'app-choose-pet',
  templateUrl: './choose-pet.component.html',
  styleUrls: ['./choose-pet.component.css']
})
export class ChoosePetComponent implements OnInit {
  liste : Animal[]=[]
  liste1 : Animal[]=[]
  nbranim=0;
  total=0;
 ajoutForm: FormGroup
 currentProp=new Proprietaire();
 user:any
 currentuser:any
 userFile:any
 message?:String
 imgURL:any
 imagePath:any
 offre2:Animal=new Animal();
  constructor(
     private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService,
   ) { 
      this.user=this.service.userDetail()

      let formControls = {
        petName: new FormControl('', [
          Validators.required,
  
        ]),
       
        petBirth: new FormControl('', [
          Validators.required,
  
        ]),
        petType: new FormControl('', [
          Validators.required,
  
        ]),
      
      }
      this.ajoutForm= this.fb.group(formControls)
    }
    
    get petName() { return this.ajoutForm.get('petName') }
    get petType() { return this.ajoutForm.get('petType') }
    get petBirth() { return this.ajoutForm.get('petBirth') }
  
   
    ajouterAnimal() {
      let data = this.ajoutForm.value;
      console.log(data);
      let anim = new Animal(
         undefined ,data.petName, data.petType,JSON.parse(JSON.stringify(this.currentProp)), data.petBirth);
         console.log(anim); 
         this.currentProp.animal.push(anim);
         console.log(55)
         this.service.updateProp(this.currentProp.id!, this.currentProp)
      if(data.petName==0||data.petType==0||data.petBirth==0)
      {this.toast.info({
        detail:'error msg !!',
        summary:'remplir votre champs'
      });
    }else {    
      this.service.addAnimal(anim).subscribe(

  
        res => {
          console.log(res);
          this.toast.success({
            detail:'success msg',
            summary:'Ajout avec Succés'
          }); 
          this.router.navigate(['/dashboard']);
        },
        err => {
          console.log(err);
          this.toast.error({
            detail:'error msg',
            summary:'verifier votre formulaire !'
          });
  
        }
  
      )
    
  
    }}
  
    ngOnInit(): void {
      this.currentuser=localStorage.getItem("user")
      this.service.getPropById(this.service.userDetail().id).subscribe(Proprietaire=>{
        this.currentProp=Proprietaire
      })
    }

    Continue(){
      this.user=localStorage.getItem("user")
    this.service.getPropById(this.service.userDetail().id).subscribe(proprietaire=>{
      this.liste=proprietaire.animal
      this.nbranim=proprietaire.animal.length
      console.log(this.nbranim)
      if(this.nbranim==0)
        {this.toast.info({
          detail:'error msg !!',
          summary:'Vous Devez Ajouter Votre Compagnant'
        });}
        else{
          this.router.navigate(["/dashboard"]).then(()=>{
            window.location.reload()
          })
      }
      // this.total=this.liste2.length
      
      // this.liste2=this.liste.filter(offre=>offre.etat==true)
      // this.liste3=this.liste2
     
    })
 
  
  }
    
  
  }
