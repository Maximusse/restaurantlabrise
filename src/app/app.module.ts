import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserXhr  } from '@angular/http';
import { NgProgressModule, NgProgressBrowserXhr  } from 'ngx-progressbar';
import { Routes, RouterModule } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { OwlModule } from 'ngx-owl-carousel';
// import { Ng2OwlCarouselComponent } from 'ng2-owl-carousel2';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

import { ServiceService } from './services/service.service';
import { BoissonsComponent } from './components/boissons/boissons.component';
import { SpecialComponent } from './components/special/special.component';
import { GallerieComponent } from './components/gallerie/gallerie.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    BoissonsComponent,
    SpecialComponent,
    GallerieComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    NgProgressModule,
    OwlModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    {provide: BrowserXhr, useClass: NgProgressBrowserXhr}, ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
