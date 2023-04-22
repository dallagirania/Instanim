import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './Service/auth.guard';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VeterinaryComponent } from './veterinary/veterinary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListgComponent } from './listg/listg.component';
import { ListbComponent } from './listb/listb.component';
import { ListdComponent } from './listd/listd.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { AddPetComponent } from './add-pet/add-pet.component';


const routes: Routes = [
 
  { path: 'add', component:AddPetComponent},
  { path: 'home', component:HomeComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'aboutus', component:AboutUsComponent},
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'header', component:HeaderComponent},
  { path: 'footer', component:FooterComponent},
  { path: 'vet', component:VeterinaryComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'listeGrooming', component:ListgComponent},
  { path: 'listeBoarding', component:ListbComponent},
  { path: 'listeDaycare', component:ListdComponent},
  { path: 'header1', component:ListdComponent},
  { path: 'blog-list', component:BlogListComponent},
  { path: 'blog', component:BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
