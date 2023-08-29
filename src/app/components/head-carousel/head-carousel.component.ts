import { Component, Input, OnInit } from '@angular/core';
import { AvailableLanguages } from 'src/assets/types';

@Component({
  selector: 'app-head-carousel',
  templateUrl: './head-carousel.component.html',
  styleUrls: ['./head-carousel.component.scss']
})
export class HeadCarouselComponent implements OnInit {
  private _lang:AvailableLanguages="es";
  get lang(){
    return this._lang
  }
  @Input() set lang(value:AvailableLanguages){
    this._lang = value
    this.carouselItems =(()=>{
      switch(this.lang){
        case "en":
          return [
            '../../../assets/img/webp/one.webp',
            '../../../assets/img/webp/two.webp',
            // carrousel ingles
          ];
        case "es":
          return [
            '../../../assets/img/webp/1.webp',
            '../../../assets/img/webp/2.webp',
            // add more image paths as needed
          ];
      }
    })();
  };
  carouselItems : any;

  currentItem = 0;
  previousItem = -1;
  showModal =false;
  showText = false;
  intervalId: any;

  constructor() { /* TODO document why this constructor is empty */  }

  ngOnInit() {
    setTimeout(() => {
      this.showText = false;
    }, 3500);

    this.intervalId = setInterval(() => {
      this.next();
    }, 8000); // Change to the next image every 4 seconds
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next() {
    this.previousItem = this.currentItem;
    this.currentItem = (this.currentItem + 1) % this.carouselItems.length;
  }

  prev() {
    this.previousItem = this.currentItem;
    this.currentItem--;
    if (this.currentItem < 0) {
      this.currentItem = this.carouselItems.length - 1;
    }
  }

  navigateToDecoGoohaus() {
    window.open('https://lider.goohaus.com/decogoohaus', '_self');
  }
}
