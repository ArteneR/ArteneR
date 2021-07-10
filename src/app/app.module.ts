import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgCircleProgressModule } from 'ng-circle-progress';

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
    NgCircleProgressModule.forRoot({
        percent: 100,
        radius: 90,
        space: -10,
        outerStrokeGradient: true,
        outerStrokeWidth: 10,
        outerStrokeColor: "#4E7874",
        outerStrokeGradientStopColor: "#7E9C8E",
        innerStrokeColor: "#e7e8ea",
        innerStrokeWidth: 10,
        animateTitle: false,
        animationDuration: 1000,
        showUnits: false,
        showBackground: true,
        backgroundColor: "#F2FDFA",
        backgroundPadding: 0,
        clockwise: false,
        startFromZero: false,
        lazy: false,
        showTitle: false,
        showSubtitle: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
