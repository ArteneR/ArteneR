import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less', './header.component.mobile.less']
})
export class HeaderComponent implements OnInit {
    isNavigationVisible = true;
    currentWindowWidth = null;

    constructor() { }

    ngOnInit() {
        this.currentWindowWidth = window.innerWidth;
        if (this.currentWindowWidth <= 600) {
            this.isNavigationVisible = false;
        }
    }
    
    triggerNavigation(): void {
        this.isNavigationVisible = !this.isNavigationVisible;
    }
    
    closeNavigation(): void {
        if (this.currentWindowWidth <= 600) {
            this.isNavigationVisible = false;
        }
    }
    
    onResize(event) {
        if (event.target.innerWidth != this.currentWindowWidth) {
            this.isNavigationVisible = true;
        }
        this.currentWindowWidth = event.target.innerWidth;
    }

    scroll(elementId) {
        let element = document.getElementById(elementId);
        var offset = 160;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

}
