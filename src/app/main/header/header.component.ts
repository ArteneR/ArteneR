import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less', './header.component.mobile.less']
})
export class HeaderComponent implements OnInit {
    isNavigationVisible  = false;
    currentWindowWidth   = null;
    thresholdWindowWidth = 1000;

    constructor(public translate: TranslateService) { }

    ngOnInit() {
        this.currentWindowWidth = window.innerWidth;

        if (this.currentWindowWidth > this.thresholdWindowWidth) {
            this.isNavigationVisible = true;
        }
    }
    
    triggerNavigation(): void {
        this.isNavigationVisible = !this.isNavigationVisible;
    }

    navigateTo(elementId): void {
        this.scrollTo(elementId);
        this.closeNavigation();
    }
    
    closeNavigation(): void {
        if (this.currentWindowWidth <= this.thresholdWindowWidth) {
            this.isNavigationVisible = false;
        }
    }
    
    onResize(event) {
        this.currentWindowWidth = event.target.innerWidth;
        this.isNavigationVisible = (this.currentWindowWidth > this.thresholdWindowWidth) ? true : false;
    }

    scrollTo(elementId) {
        let element = document.getElementById(elementId);
        var offset = 160;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    setTranslationLanguage(language) {
        this.translate.use(language);
    }
}
