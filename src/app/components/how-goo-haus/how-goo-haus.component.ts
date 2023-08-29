import { Component, Input, OnInit } from '@angular/core';
import traduc from 'src/assets/traduc.json'
import { AvailableLanguages } from 'src/assets/types';

@Component({
  selector: 'app-how-goo-haus',
  templateUrl: './how-goo-haus.component.html',
  styleUrls: ['./how-goo-haus.component.scss']
})
export class HowGooHausComponent {


  texts = traduc;
  @Input() lang:AvailableLanguages="en";
}
