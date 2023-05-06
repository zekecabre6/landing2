import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss']
})
export class NavbarHomeComponent  {

  isScrolled = false;
  linkColor = 'white';


  @HostListener('window:scroll')
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (offset > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }

    const serviceSection = document.querySelector('#Service') as HTMLElement;
    if (serviceSection) {
      const serviceOffset = serviceSection.offsetTop - 50;
      if (offset >= serviceOffset) {
        this.linkColor = 'black';
      } else {
        this.linkColor = 'white';
      }
    }

  }

}
