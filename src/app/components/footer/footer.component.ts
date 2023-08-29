import { Component, Input, OnInit } from '@angular/core';
import traduc from 'src/assets/traduc.json'
import { AvailableLanguages } from 'src/assets/types';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{

  texts = traduc;
  @Input() lang:AvailableLanguages="en";

  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
}
