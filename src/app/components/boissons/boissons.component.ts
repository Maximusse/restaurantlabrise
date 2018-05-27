import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { WOW } from 'wowjs/dist/wow.min';

import { ServiceService } from '../../services/service.service';

declare var $: any;

@Component({
  selector: 'app-boissons',
  templateUrl: './boissons.component.html',
  styleUrls: ['./boissons.component.css']
})
export class BoissonsComponent implements OnInit {

  apperitifs: any;
  digestifs: any;
  cognac: any;
  whisky_1: any;
  whisky_2: any;
  whisky_3: any;
  liqueurs: any;
  gins: any;
  rhums: any;

  boissons_s: any;
  cocktails_b: any;
  boissons_p: any;
  cannettes_s: any;
  cannettes_b: any;
  bieres: any;
  boissons_e: any;
  eaux_m: any;
  jus: any;
  boissons_c: any;
  sirops: any;

  constructor(public progressService: NgProgress, private boissonsService: ServiceService) {
    this.boissons();
  }

  boissons(){
    this.boissons_s = this.boissonsService.getBoissonsSolibra();
    this.boissons_c = this.boissonsService.getBoissonsChaudes();
    this.boissons_e = this.boissonsService.getBoissonsEnergi();
    this.digestifs = this.boissonsService.getDisgestifs();
    this.sirops = this.boissonsService.getSirops();
    this.jus = this.boissonsService.getJus();
    this.cocktails_b = this.boissonsService.getCocktail();
    this.cannettes_s = this.boissonsService.getCannetteSucrerie();
    this.cannettes_b = this.boissonsService.getCannnetteBiere();
    this.eaux_m = this.boissonsService.getEau();

    this.apperitifs = this.boissonsService.getApperitif();
    this.cognac = this.boissonsService.getCognac();
    this.whisky_1 = this.boissonsService.getW1();
    this.whisky_2 = this.boissonsService.getW2();
    this.whisky_3 = this.boissonsService.getW3();
    this.liqueurs = this.boissonsService.getLiqueur();
    this.gins = this.boissonsService.getGins();
    this.rhums = this.boissonsService.getRhums();
    this.bieres = this.boissonsService.getBiere();
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
