import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less', './header.component.mobile.less']
})
export class HeaderComponent implements OnInit {
    isNavigationVisible = true;

    constructor() { }

    ngOnInit() {
    }
    
    triggerNavigation(): void {
        this.isNavigationVisible = !this.isNavigationVisible;
    }
    
    onResize(event) {
        this.isNavigationVisible = true;
    }

}
