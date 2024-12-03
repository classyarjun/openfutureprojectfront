import { Component, AfterViewInit } from '@angular/core';
import SwiperCore, { Pagination } from 'swiper';
// Swiper modules ko register karna
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent implements AfterViewInit {
  ngAfterViewInit() {
    const swiper = new SwiperCore('.mySwiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 4,
        },
      },
    });
  }
}



