import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import * as projectsData from '../assets/data/projects.json';
import * as eduAndCareerData from '../assets/data/education-and-career.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less', './app.component.mobile.less']
})
export class AppComponent {
    readonly LANGS        = ['en', 'ro'];
    readonly DEFAULT_LANG = 'en';
    projectsData: any     = projectsData;
    eduAndCareerData: any = eduAndCareerData;
    title                 = 'ArteneR';
    projects              = {};
    eduAndCareerItems     = {};

    constructor(public translate: TranslateService) {
        this.initProjects(this.projectsData.default);
        this.initEduAndCareerItems(this.eduAndCareerData.default);
        this.initTranslations(translate);
    }

    initTranslations(translate): void {
        let self = this;
        translate.addLangs(this.LANGS);
        translate.setDefaultLang(this.DEFAULT_LANG);
        
        // Trick in order to load additional translation items
        this.LANGS.forEach(lang => {
            if (lang !== this.DEFAULT_LANG) {
                translate.getTranslation(lang)
                         .subscribe(_ => { 
                            translate.setTranslation(lang, self.projects[lang], true) 
                            translate.setTranslation(lang, self.eduAndCareerItems[lang], true) 
                        });
            }
        });

        translate.getTranslation(this.DEFAULT_LANG).subscribe(
            _ => { 
                translate.setTranslation(this.DEFAULT_LANG, self.projects[this.DEFAULT_LANG], true);
                translate.setTranslation(this.DEFAULT_LANG, self.eduAndCareerItems[this.DEFAULT_LANG], true);
                translate.use(this.DEFAULT_LANG);
            }
        );
    }

    initProjects(projectsData): void {
        let self = this;

        this.LANGS.forEach(lang => self.projects[lang] = {});

        Object.keys(projectsData).forEach(id => {
            this.LANGS.forEach(lang => self.projects[lang][id] = projectsData[id][lang] );
        });
    }

    initEduAndCareerItems(eduAndCareerData): void {
        let self = this;

        this.LANGS.forEach(lang => self.eduAndCareerItems[lang] = {});

        Object.keys(eduAndCareerData).forEach(id => {
            this.LANGS.forEach(lang => self.eduAndCareerItems[lang][id] = eduAndCareerData[id][lang] );
        });
    }
}
