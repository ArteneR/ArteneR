import { Component, OnInit, Input } from '@angular/core';

import { Project } from './project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less', './project.component.mobile.less']
})
export class ProjectComponent implements OnInit {
    @Input() project: Project;

    isFullscreenViewOpened: boolean = false;
    selectedImageIndex: number = -1;
    currentIndex: number = -1;
    images: Array<object> = [];

    constructor() {
    }

    ngOnInit() {
        this.images = this.project.images.map(image => ({image: image}));
    }

    openFullscreenView(index) {
        this.selectedImageIndex = index;
        this.isFullscreenViewOpened = true;
    }
 
    closeFullscreenView() {
        this.isFullscreenViewOpened = false;
        this.currentIndex = -1;
    }
}
