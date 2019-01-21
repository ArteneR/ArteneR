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
    
    onResize(event) {
        if (event.target.innerWidth != this.currentWindowWidth) {
            this.isNavigationVisible = true;
        }
        this.currentWindowWidth = event.target.innerWidth;
    }

}
