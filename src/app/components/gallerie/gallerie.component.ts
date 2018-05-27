import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { ServiceService } from '../../services/service.service';
import { WOW } from 'wowjs/dist/wow.min';

declare var $: any;

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  imgs: any;

  constructor(public progressService: NgProgress, private ImageService: ServiceService) { 
    this.getImages();
  }

  getImages(){
    this.imgs = this.ImageService.getImages();
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
      $('.materialboxed').materialbox();
    })
  }

}
