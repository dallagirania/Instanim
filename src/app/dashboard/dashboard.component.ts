import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Service/crud.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Proprietaire } from '../Model/Proprietaire.model';
import { Publication } from '../Model/Publication.model';
// import { PublicationComment } from '../Model/PublicationComment.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  mydate=new Date()
  user:any
  photoLink ="assets/images/h1-newsletter-bg.png";
  liste:Publication[]=[]
  liste1:Proprietaire[]=[]
  liste3:Publication[]=[]
  liste4:Publication[]=[]
  liste7:Publication[]=[]
  liste6:Publication[]=[]
  liste8:Publication[]=[]
  liste5:any[]=[]
  list:any[]=[]
  // liste8:PublicationComment[]=[]
  // listCom:PublicationComment[]=[]
  ajoutForm: FormGroup
  ajoutForm1:FormGroup
  nbranim=0;
  userFile:any
  message?:String
  imgURL:any
  imagePath:any
  currentProp=new Proprietaire();
  currentPub=new Publication()
  gradientColorStyle="";
  colorful=false;
  constructor(
    private service: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService,
   ) { 
      this.user=this.service.userDetail()

      let formControls = {
       text: new FormControl('', [
          Validators.required,
  
        ]),
       
        image: new FormControl('', [
          Validators.required,
  
        ]),
       
      
      
      }
      let formControls1 = {
        text: new FormControl('', [
          Validators.required,
  
        ]),
      
      }
      this.ajoutForm= this.fb.group(formControls)
      this.ajoutForm1= this.fb.group(formControls1)
    }

    get text() { return this.ajoutForm.get('text') }
    get image() { return this.ajoutForm.get('image') }
    get msg() { return this.ajoutForm1.get('text') }

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

    ajouterPublication() {
      console.log("hi")
      let data = this.ajoutForm.value;
      console.log(data);
      let pub = new Publication(
         undefined,data.aime,this.mydate.toISOString().slice(0,10), data.etat,this.imgURL,data.text,JSON.parse(JSON.stringify(this.currentProp)));
         console.log(pub); 
         this.currentProp.publication.push(pub);
         console.log(55)
         this.service.updateProp(this.currentProp.id!, this.currentProp)
         console.log(22222222)
      if(data.text==0||this.imgURL==0)
      {this.toast.info({
        detail:'error msg !!',
        summary:'remplir votre champs'
      });
    }else {    
      this.service.adddPub(pub).subscribe(
        res => {
          console.log(this.imgURL);
          // this.toast.success({
          //   detail:'success msg',
          //   summary:'Ajout avec Succés'
          // }); 
          this.router.navigate(['/dashboard']);
          window.location.reload();

        },
        err => {
          console.log(err);
          this.toast.error({
            detail:'error msg',
            summary:'verifier votre Publication !'
          });
  
        }
  
      )
      console.log(pub)
      console.log('hiiiiiiiiiiiiiiiii')
    
  
    }}
    ajouterComment() {
      console.log("hi")
      let data = this.ajoutForm1.value;
      console.log(data);
      let pub = new Publication(
         undefined,data.aime,this.mydate.toISOString().slice(0,10), data.etat,data.image,data.text,JSON.parse(JSON.stringify(this.currentProp)));
         console.log(pub); 
         this.currentProp.publication.push(pub);
         console.log(55)
         this.service.updateProp(this.currentProp.id!, this.currentProp)
         console.log(22222222)
      if(data.text==0)
      {this.toast.info({
        detail:'error msg !!',
        summary:'remplir votre champs'
      });
    }else {    
      this.service.adddPub(pub).subscribe(
        res => {
          console.log(this.imgURL);
          // this.toast.success({
          //   detail:'success msg',
          //   summary:'Ajout avec Succés'
          // }); 
          this.router.navigate(['/dashboard']);
          window.location.reload();

        },
        err => {
          console.log(err);
          this.toast.error({
            detail:'error msg',
            summary:'verifier votre Publication !'
          });
  
        }
  
      )
      console.log(pub)
      console.log('hiiiiiiiiiiiiiiiii')
    
  
    }}
  ngOnInit(): void {
    this.user=localStorage.getItem("user")
    this.service.getPropById(this.service.userDetail().id).subscribe(Proprietaire=>{
      this.currentProp=Proprietaire
    })
   

    // this.service.getPublication().subscribe(ser=>{
    //   this.liste3=ser 
    //   this.liste4=this.liste3.reverse()
    //   this.liste5=this.liste4.filter(ser=>ser.etat==true)
     
    //   })
     

      this.service.getPublication().subscribe(postulation=>{
        this.list=postulation
        this.liste4=this.list.reverse()
        this.liste5=this.liste4.filter(ser=>ser.etat==true)
        console.log(this.list)
      })
        this.service.getPublication().subscribe(postulation=>{
          this.list=postulation
          this.liste6=this.list.reverse()
          this.liste8=this.liste6.filter(ser=>ser.aime==true)
          console.log(this.list)
        // for(let pub of this.liste5)
        // {
        //   this.service.getPubById(pub.id).subscribe(blog=>{
        //     this.liste8=blog.publicationComment
        //     this.nbranim=this.liste8.length
        //     console.log(this.liste8)
           
        //   })
        // }

    })  
    
  }

  // getPub(id:number)
  // {
  //   this.service.getPubById(id).subscribe(data=>{
  //     this.currentPub=data

  //   })
  // }
  // ajouterContact(id:number) {
    
  //   this.service.getPubById(id).subscribe(data=>{
  //     this.currentPub=data
  //     console.log(this.currentPub)

  //   })
  //   // this.service.getPubById(id).subscribe(blog=>{
  //   //   this.liste8=blog.publicationComment
  //   //   this.nbranim=this.liste8.length
  //   //   console.log(this.liste8)
     
  //   // })
  //   let data = this.ajoutForm1.value;
  //   if(this.user!=null)
  //   {
  //    data.prenom=this.currentProp.prenom,
  //    data.nom=this.currentProp.nom,
  //    data.email=this.currentProp.email
  //    data.image=this.currentProp.photo
  //   }
  //   console.log(data);
  //   let contact = new PublicationComment(
  //      undefined ,this.mydate.toISOString().slice(0,19),data.email, data.image,data.msg,data.nom,data.prenom,JSON.parse(JSON.stringify(this.currentPub)));
  //      console.log(contact);
     
   
  //   if(data.msg==0)
  //   {
  //   //   this.toast.info({
  //   //   detail:'error msg !!',
  //   //   summary:'remplir votre champs'
  //   // });
  // }else{
      
  //   this.service.addCommentPub(contact).subscribe(


  //     res => {
  //       console.log(res);
        
  //       this.router.navigate (["/dashboard"]).then(()=>{
  //        window.location.reload();
  //      })
   
       
  //     },
  //     err => {
  //       console.log(err);
  //       // this.toast.error({
  //       //   detail:'error msg',
  //       //   summary:'verifier votre formulaire !'
  //       // });

  //     }

  //   )
  // }

  // }
  onClick(){
    if(this.colorful==false){
      this.colorful=true;
      this.gradientColorStyle="color: #F86CA7;"
    }
    else{
      this.colorful=false;
      this.gradientColorStyle="";
    }
   
  }
  updateOfetat(offre:Publication){
    console.log(offre);
    let index=this.liste.indexOf(offre);
    if(offre.etat==true)
    {let newOffre=new Publication(offre.id,false,offre.datepub,offre.etat,offre.image,offre.text,offre.proprietaire)
    this.service.updatePublication(offre.id!,newOffre).subscribe
  (
    res=>{console.log(res)
    this.liste[index]=newOffre
    },
    err=>console.log(err)
  )
    }
   
    else{

      let newOffre=new Publication(offre.id,true,offre.datepub,offre.etat,offre.image,offre.text,offre.proprietaire)
      this.service.updatePublication(offre.id!,newOffre).subscribe
    (
      res=>{console.log(res)
      this.liste[index]=newOffre
      },
      err=>console.log(err)
    )

    }
    window.location.reload()


  }
 
}