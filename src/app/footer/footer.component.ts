import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
    constructor(public translate: TranslateService) {}

    ngOnInit() {
    }

    getCurrentYear() {
        return (new Date()).getFullYear();
    }

    setTranslationLanguage(language) {
        this.translate.use(language);
    }
}
