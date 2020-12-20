import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule  } from 'angular-font-awesome';
import { ScrollToModule } from 'ng2-scroll-to-el';

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
import { SectionTitleComponent } from './section-title/section-title.component';
import { SkillComponent } from './main/my-skills/skill/skill.component';
import { SkillSmallComponent } from './main/my-skills/skill-small/skill-small.component';
import { ProjectComponent } from './main/my-works/project/project.component';
import { TechnologyComponent } from './main/my-works/project/technology/technology.component';
import { EduAndCareerItemComponent } from './main/education-and-career/edu-and-career-item/edu-and-career-item.component';

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
    ContactComponent,
    SectionTitleComponent,
    SkillComponent,
    SkillSmallComponent,
    ProjectComponent,
    TechnologyComponent,
    EduAndCareerItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
