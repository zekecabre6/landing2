import { Component, Input } from '@angular/core';
import traduc from 'src/assets/traduc.json'
import { AvailableLanguages } from 'src/assets/types';


@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent {

  texts = traduc;
  @Input() lang:AvailableLanguages="en";
}
