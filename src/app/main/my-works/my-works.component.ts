import { Component, OnInit } from '@angular/core';

import { Project } from '../../main/my-works/project/project';
import * as projectsData from '../../../assets/data/projects.json';


@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.less', './my-works.component.mobile.less']
})
export class MyWorksComponent implements OnInit {
    projectsData: any = projectsData;
    projects: Array<Project> = [];
    readonly DEFAULT_LANG = 'en';

    constructor() { }

    ngOnInit() {
        Object.keys(this.projectsData.default).forEach(id => {
            let project = this.projectsData.default[id][this.DEFAULT_LANG];
            this.projects.push(new Project(
                parseInt(id),
                project.title,
                project.projectLink,
                project.year,
                project.projectFolder,
                project.description,
                project.images,
                project.technologiesUsed,
                project.descriptionOnLeftSide
            ));
        });
    }
}
