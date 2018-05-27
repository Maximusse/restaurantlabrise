import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { WOW } from 'wowjs/dist/wow.min';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public progressService: NgProgress) { 
    
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
      $('.parallax').parallax();

       var owl = $('.owl-carousel');
        owl.owlCarousel({
          items: 5,
          loop: true,
          autoplay: true,
          autoplayHoverPause: false,
          dots: false
        });

    })
  }

}
