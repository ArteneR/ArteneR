import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule  } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { TopBannerComponent } from './main/top-banner/top-banner.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { MySkillsComponent } from './main/my-skills/my-skills.component';
import { HeaderComponent } from './main/header/header.component';
import { MyWorksComponent } from './main/my-works/my-works.component';
import { EducationAndCareerComponent } from './main/education-and-career/education-and-career.component';
import { ContactComponent } from './main/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    TopBannerComponent,
    AboutMeComponent,
    MySkillsComponent,
    HeaderComponent,
    MyWorksComponent,
    EducationAndCareerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
