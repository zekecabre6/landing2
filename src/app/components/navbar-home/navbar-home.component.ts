import { Component, HostListener, Output, EventEmitter, Input } from '@angular/core';
import traduc from 'src/assets/traduc.json';
import { AvailableLanguages } from 'src/assets/types';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss']
})
export class NavbarHomeComponent {
  isScrolled = false;
  isMenuOpen = false;
  isLenguajeOpen = false;
  texts = traduc;
  @Input() lang: AvailableLanguages = "en";
  @Input() langRedirect: string = "en";

  @HostListener('window:scroll')
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (offset > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }

  openMenu() {
    this.isMenuOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  toggleLenguaje() {
    this.isLenguajeOpen = !this.isLenguajeOpen;
    if (this.isLenguajeOpen) {
      this.openLenguaje();
    } else {
      this.closeLenguaje();
    }
  }

  openLenguaje() {
    this.isLenguajeOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLenguaje() {
    this.isLenguajeOpen = false;
    document.body.style.overflow = '';
  }
}
