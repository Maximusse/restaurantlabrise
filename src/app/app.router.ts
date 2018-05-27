import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { BoissonsComponent } from './components/boissons/boissons.component';
import { SpecialComponent } from './components/special/special.component';
import { GallerieComponent } from './components/gallerie/gallerie.component';
import { ContactComponent } from './components/contact/contact.component';


export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'boisson', component: BoissonsComponent },
    { path: 'special', component: SpecialComponent },
    { path: 'gallerie', component: GallerieComponent },
    { path: 'contact', component: ContactComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);