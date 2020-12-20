import { Component, OnInit } from '@angular/core';

import { Project } from '../../main/my-works/project/project';

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.less', './my-works.component.mobile.less']
})
export class MyWorksComponent implements OnInit {
    projects: Array<Project> = [];


    constructor() { }
    

    ngOnInit() {
            var project1_data = {
                    'title': "My Portofolio website",
                    'year': "2018",
                    'projectFolder': "01",
                    'description': `What I enjoy the most is building from scratch a software product, 
                                    making its architecture, thinking over the important decisions which 
                                    need to be taken and carefully crafting it until  it becomes a masterpiece.`,
                    'images': ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg'],
                    'technologiesUsed': ['nodejs-logo.png', 'css-logo.png', 'adobe-illustrator-logo.png', 'vuejs-logo.png'],
                    'descriptionOnLeftSide': true
            };
            var project2_data = {
                    'title': "My Portofolio website",
                    'year': "2019",
                    'projectFolder': "02",
                    'description': `What I enjoy the most is building from scratch a software product, 
                                    making its architecture, thinking over the important decisions which 
                                    need to be taken and carefully crafting it until  it becomes a masterpiece.`,
                    'images': ['01.jpg', '02.jpg', '03.jpg', '04.jpg'],
                    'technologiesUsed': ['nodejs-logo.png', 'css-logo.png', 'adobe-illustrator-logo.png', 'vuejs-logo.png'],
                    'descriptionOnLeftSide': false
            };

            var project1 = new Project(project1_data['title'],
                                       project1_data['year'],
                                       project1_data['projectFolder'],
                                       project1_data['description'],
                                       project1_data['images'],
                                       project1_data['technologiesUsed'],
                                       project1_data['descriptionOnLeftSide']);

            var project2 = new Project(project2_data['title'],
                                       project2_data['year'],
                                       project2_data['projectFolder'],
                                       project2_data['description'],
                                       project2_data['images'],
                                       project2_data['technologiesUsed'],
                                       project2_data['descriptionOnLeftSide']);

            this.projects.push(project1);
            this.projects.push(project2);
    }

}