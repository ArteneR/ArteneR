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

    constructor() { }

    ngOnInit() {
        this.projectsData.default.forEach(project => {
            this.projects.push(new Project(
                project.en.title,
                project.en.projectLink,
                project.en.year,
                project.en.projectFolder,
                project.en.description,
                project.en.images,
                project.en.technologiesUsed,
                project.en.descriptionOnLeftSide
            ));
        });
    }
}
