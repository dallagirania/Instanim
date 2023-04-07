import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginFormateurComponent } from './login-formateur/login-formateur.component';
import { RegisterFormateurComponent } from './register-formateur/register-formateur.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { ChoosePetComponent } from './choose-pet/choose-pet.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VeterinaryComponent } from './veterinary/veterinary.component';
// import Swiper, { Navigation, Pagination,Scrollbar } from 'swiper';

// // configure Swiper to use modules
// Swiper.use([Navigation, Pagination,Scrollbar]);

// init Swiper:
// const swiper = new Swiper(".home1-services-slider", {observer: true,observeParents: true,slidesPerView:4,spaceBetween:24,loop:true,speed:1500,autoplay:{delay:2000,disableOnInteraction:false},navigation:{nextEl:".next-btn-1",prevEl:".prev-btn-1",},breakpoints:{280:{slidesPerView:1,spaceBetween:15},480:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:3},1200:{slidesPerView:4},1400:{slidesPerView:4},1600:{slidesPerView:4},}});

@NgModule({
  declarations: [
    AppComponent, 
    LoginFormateurComponent,
    RegisterFormateurComponent,
    ChoosePetComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    VeterinaryComponent, 
    
    // SwiperModule
    
  ],
  imports: [
    NgToastModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
