import { Component, OnInit, Input } from '@angular/core';

import traduc from 'src/assets/traduc.json'
import { AvailableLanguages } from 'src/assets/types';

@Component({
  selector: 'app-work-design',
  templateUrl: './work-design.component.html',
  styleUrls: ['./work-design.component.scss']
})
export class WorkDesignComponent implements OnInit {

  texts = traduc;
  @Input() lang:AvailableLanguages="en";

  @Input() title: string | HTMLBRElement = 'Súmate a la revolución<br>del diseño';
  @Input() desc: string = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.';
  @Input() img1: string = 'assets/img/work-design.svg';
  @Input() img1desc: string = 'Ver Ejemplos';
  @Input() img1sub: string = 'lorem ipsum dolor sit amet consectetur adipiscing elit';

  constructor() { }

  ngOnInit(): void {
  }

}
