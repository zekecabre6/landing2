import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  @Input() backgroundImage: string = '../../../assets/img/backgroundhero.svg';
  @Input() our: string = 'Nosotros Somos';
  @Input() title: string = 'GooHaus';
  @Input() subtitle: string = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.';
  @Input() buttonLabel: string = 'Comenzar!';

  constructor() { }


}
