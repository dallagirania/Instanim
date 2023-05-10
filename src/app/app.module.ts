import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
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
import { Header1Component } from './header1/header1.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
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
import { AnimalComponent } from './animal/animal.component';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    VeterinaryComponent,
    DashboardComponent,
    ListgComponent,
    ListbComponent,
    ListdComponent,
    Header1Component,
    BlogListComponent,
    BlogComponent,
    AddPetComponent, 
    DashboardMenuComponent,
    ForumComponent,
    DashboardVeterinaryComponent,
    DashboardDaycareComponent,
    DashboardGroomingComponent,
    DashboardBoardingComponent,
    BlogHomeComponent,
    BlogdetComponent,
    ProfileComponent,
    ChatComponent,
    TodoListsComponent,
    ImportantTodoComponent,
    EditAnimalComponent,
    AddtodoComponent,
    AnimalComponent,
  ],
  imports: [
    NgToastModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
