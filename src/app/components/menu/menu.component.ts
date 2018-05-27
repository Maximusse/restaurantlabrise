import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { WOW } from 'wowjs/dist/wow.min';

import { ServiceService } from '../../services/service.service';

declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  entrees_f: any;
  entrees_c: any;
  sandwish: any;
  chinoises: any;
  potages: any;
  africaines: any;
  viandes: any;
  volailles: any;
  poissons: any;
  garnitures: any;
  pates: any;
  pizzas: any;
  dessert_glaces: any;
  dessert_sorbets: any;

  constructor(public progressService: NgProgress, private menuService: ServiceService) {
    this.menus();
  }

  menus(){
    this.entrees_f = this.menuService.getEntreesFroides();
    this.entrees_c = this.menuService.getEntreesChaudes();
    this.sandwish = this.menuService.getSandwish();
    this.chinoises = this.menuService.getChinoises();
    this.potages = this.menuService.getPotages();
    this.africaines = this.menuService.getAfricaines();
    this.viandes = this.menuService.getViandes();
    this.volailles = this.menuService.getVolailles();
    this.poissons = this.menuService.getPoissons();
    this.garnitures = this.menuService.getGarnitures();
    this.pates = this.menuService.getPates();
    this.pizzas = this.menuService.getPizzas();
    this.dessert_glaces = this.menuService.getDessertGlasses();
    this.dessert_sorbets = this.menuService.getDessertSorbets();
  }

  ngOnInit() {

    new WOW().init();

    this.progressService.start();
    this.progressService.set(0.1);
    this.progressService.inc(0.2);

    setTimeout(() => {
      this.progressService.done();
    }, 1000); this.progressService.start();
    this.progressService.set(0.1);
    this.progressService.inc(0.2);

    setTimeout(() => {
      this.progressService.done();
    }, 1000);


    $(function(){
      $(window).scrollTop(0);
      $('.slider').slider();
      
    })
  }

}
