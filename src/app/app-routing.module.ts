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
import { ForumComponent } from './forum/forum.component';
import { DashboardVeterinaryComponent } from './dashboard-veterinary/dashboard-veterinary.component';
import { DashboardDaycareComponent } from './dashboard-daycare/dashboard-daycare.component';
import { DashboardGroomingComponent } from './dashboard-grooming/dashboard-grooming.component';
import { DashboardBoardingComponent } from './dashboard-boarding/dashboard-boarding.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogdetComponent } from './blogdet/blogdet.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { ImportantTodoComponent } from './important-todo/important-todo.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { DialogComponent } from './dialog/dialog.component';
import { AnimalComponent } from './animal/animal.component';



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
  { path: 'blog/:id', component:BlogComponent},
  { path: 'forum', component:ForumComponent},
  { path: 'dash-vet', component:DashboardVeterinaryComponent},
  { path: 'dash-daycare', component:DashboardDaycareComponent},
  { path: 'dash-boarding', component:DashboardBoardingComponent},
  { path: 'dash-grooming', component:DashboardGroomingComponent},
  { path: 'bloghome', component:BlogHomeComponent},
  { path: 'blogDet/:id', component:BlogdetComponent},
  { path: 'profile/:id', component:ProfileComponent},
  { path: 'chat', component:ChatComponent},
  { path: 'todolists', component:TodoListsComponent},
  { path: 'todolistImportant', component:ImportantTodoComponent},
  { path: 'anim', component:AnimalComponent},
  { path: 'editanim/:id', component:EditAnimalComponent},
  { path: 'addtodo', component:AddtodoComponent},
  // { path: 'dialog', component:DialogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
