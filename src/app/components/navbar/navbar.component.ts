import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(function(){
      $('.button-collapse').sideNav();

      $(window).scroll(function(){
        let posScroll = $(document).scrollTop();
          if(posScroll >= 117){ 
            $('#navbar-two').fadeIn();
          }else {
            $('#navbar-two').fadeOut();
          }
      });



    })

  }

}
