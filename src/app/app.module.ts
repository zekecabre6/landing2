import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxHotjarModule } from 'ngx-hotjar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { WorkDesignComponent } from './components/work-design/work-design.component';
import { HowGooHausComponent } from './components/how-goo-haus/how-goo-haus.component';
import { WorkLinesComponent } from './components/work-lines/work-lines.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormComponent } from './components/form/form.component';
import { HeadCarouselComponent } from './components/head-carousel/head-carousel.component';
import { WhatsappComponent } from './components/./whatsapp/whatsapp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHomeComponent,
    WorkDesignComponent,
    HowGooHausComponent,
    WorkLinesComponent,
    OurTeamComponent,
    CompaniesComponent,
    FooterComponent,
    FormComponent,
    HeadCarouselComponent,
    WhatsappComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxHotjarModule.forRoot('YOUR_HOTJAR_ID'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
