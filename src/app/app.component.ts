import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less', './app.component.mobile.less']
})
export class AppComponent {
    title = 'ArteneR';
    readonly LANGS = ['en', 'ro'];
    readonly PROJECTS = {
        'en': {
            'project': 'AAA'
        },
        'ro': {
            'project': 'BBB'
        }
    };

    constructor(public translate: TranslateService) {
        this.initTranslations(translate);
    }

    initTranslations(translate): void {
        translate.addLangs(this.LANGS);
        translate.setDefaultLang('en');
        let projects = this.PROJECTS;
        
        // Trick in order to load additional translation items
        translate.getTranslation('ro').subscribe(
            _ => { 
                translate.setTranslation('ro', projects.ro, true);
            }
        );
    
        translate.getTranslation('en').subscribe(
            _ => { 
                translate.setTranslation('en', projects.en, true);
                translate.use('en');
            }
        );
    }
}
