import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoosePetComponent } from './choose-pet/choose-pet.component';

import { LoginFormateurComponent } from './login-formateur/login-formateur.component';

import { RegisterFormateurComponent } from './register-formateur/register-formateur.component';
import { AuthGuard } from './Service/auth.guard';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VeterinaryComponent } from './veterinary/veterinary.component';


const routes: Routes = [
  { path: 'loginProprietaire', component:LoginFormateurComponent  },
  { path: 'registerProprietaire', component:RegisterFormateurComponent },
  { path: 'addanimal', component:ChoosePetComponent},
  { path: 'home', component:HomeComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'aboutus', component:AboutUsComponent},
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'header', component:HeaderComponent},
  { path: 'footer', component:FooterComponent},
  { path: 'vet', component:VeterinaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
