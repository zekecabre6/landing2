import { Component, Input, OnInit } from '@angular/core';
import traduc from 'src/assets/traduc.json'
import { AvailableLanguages } from 'src/assets/types';
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent  {


  texts = traduc;
  @Input() lang:AvailableLanguages="en";


  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
}
