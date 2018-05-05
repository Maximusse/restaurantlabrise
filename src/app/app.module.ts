import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserXhr  } from '@angular/http';
import { NgProgressModule, NgProgressBrowserXhr  } from 'ngx-progressbar';
import { Routes, RouterModule } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to-el';

import { routes } from './app.router';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    NgProgressModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    {provide: BrowserXhr, useClass: NgProgressBrowserXhr}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
