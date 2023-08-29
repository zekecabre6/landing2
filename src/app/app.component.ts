import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AvailableLanguages } from 'src/assets/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Goohaus';
  lang: AvailableLanguages = "es"
  constructor(private router: Router, private ar: ActivatedRoute) {}

  ngOnInit() {
    const urlLang = window.location.pathname.split('/')[1];
    if (['en', 'es'].includes(urlLang)) {
      this.lang = urlLang as AvailableLanguages
    }
  }
}
