import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { HeroComponent } from './components/hero/hero.component';
import { WorkDesignComponent } from './components/work-design/work-design.component';
import { HowGooHausComponent } from './components/how-goo-haus/how-goo-haus.component';
import { WorkLinesComponent } from './components/work-lines/work-lines.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHomeComponent,
    HeroComponent,
    WorkDesignComponent,
    HowGooHausComponent,
    WorkLinesComponent,
    OurTeamComponent,
    CompaniesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
