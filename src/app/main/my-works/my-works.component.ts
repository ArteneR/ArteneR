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
                    'title': "Edenhaus.ro",
                    'projectLink': "https://edenhaus.ro",
                    'year': "2018",
                    'projectFolder': "01",
                    'description': `A Single Page Application for displaying properties which are for sale or for rent. Made from scratch in 
                                    AngularJS and PHP, design of the website being made entirely by me as well. It also has a 
                                    comprehensive Admin panel to allow the administrator to easily add and edit properties.`,
                    'images': ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg'],
                    'technologiesUsed': ['angularjs.logo.png', 'php-logo.png', 'css-logo.png', 'html-logo.png', 'adobe-illustrator-logo.png'],
                    'descriptionOnLeftSide': true
            };
            var project2_data = {
                    'title': "My Portofolio website",
                    'projectLink': "https://artener.ro",
                    'year': "2019",
                    'projectFolder': "02",
                    'description': `This portofolio simple website was made in Angular, more for learning Angular concepts and improving 
                                    my skills on Frontend development. Design of the web page was made by me as well in Adobe Illustrator.`,
                    'images': ['01.jpg', '02.jpg', '03.jpg', '04.jpg'],
                    'technologiesUsed': ['angularjs.logo.png', 'css-logo.png', 'html-logo.png', 'adobe-illustrator-logo.png'],
                    'descriptionOnLeftSide': false
            };

            var project1 = new Project(project1_data['title'],
                                       project1_data['projectLink'],
                                       project1_data['year'],
                                       project1_data['projectFolder'],
                                       project1_data['description'],
                                       project1_data['images'],
                                       project1_data['technologiesUsed'],
                                       project1_data['descriptionOnLeftSide']);

            var project2 = new Project(project2_data['title'],
                                       project2_data['projectLink'],
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
