import { Component, OnInit, Input } from '@angular/core';

import { Project } from './project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less', './project.component.mobile.less']
})
export class ProjectComponent implements OnInit {
    @Input() project: Project;

    constructor() {
    }

    ngOnInit() {
    }
}
