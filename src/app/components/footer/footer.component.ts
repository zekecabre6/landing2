import { Component, OnInit } from '@angular/core';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
}
