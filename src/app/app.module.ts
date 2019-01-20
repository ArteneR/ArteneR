import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { TopBannerComponent } from './main/top-banner/top-banner.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { MySkillsComponent } from './main/my-skills/my-skills.component';
import { HeaderComponent } from './main/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    TopBannerComponent,
    AboutMeComponent,
    MySkillsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
