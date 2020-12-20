import { Component, OnInit } from '@angular/core';

import { EduAndCareerItem } from '../../main/education-and-career/edu-and-career-item/edu-and-career-item';

@Component({
  selector: 'app-education-and-career',
  templateUrl: './education-and-career.component.html',
  styleUrls: ['./education-and-career.component.less', './education-and-career.component.mobile.less']
})
export class EducationAndCareerComponent implements OnInit {
    eduAndCareerItems: Array<EduAndCareerItem> = [];
    
    
    constructor() { }

    ngOnInit() {
            var eduAndCareerItem1_data = {
                    'title': "My Portofolio website",
                    'description': "What I enjoy the most is building from scratch a software product, making its architecture, thinking over the important decisions which need to be taken and carefully crafting it until  it becomes a masterpiece.",
                    'period': {
                        'start': {
                            'year': "2017",
                            'month': "Sept"
                        },
                        'end': {
                            'year': "Present"
                        }
                    },
                    'contact': {
                        'phone': "0725242362",
                        'email': "georgevici.ioan@gmail.com"
                    }
            };
            
            var eduAndCareerItem2_data = {
                    'title': "My Portofolio website",
                    'description': "What I enjoy the most is building from scratch a software product, making its architecture, thinking over the important decisions which need to be taken and carefully crafting it until  it becomes a masterpiece.",
                    'period': {
                        'start': {
                            'year': "2013",
                            'month': "Sept"
                        },
                        'end': {
                            'year': "2017",
                            'month': "Jun"
                        }
                    },
                    'contact': {
                        'phone': "0725242362",
                        'email': "georgevici.ioan@gmail.com"
                    }
            };

            var eduAndCareerItem1 = new EduAndCareerItem(eduAndCareerItem1_data['title'],
                                                         eduAndCareerItem1_data['description'],
                                                         eduAndCareerItem1_data['period'],
                                                         eduAndCareerItem1_data['contact']);
                                                         
            var eduAndCareerItem2 = new EduAndCareerItem(eduAndCareerItem2_data['title'],
                                                         eduAndCareerItem2_data['description'],
                                                         eduAndCareerItem2_data['period'],
                                                         eduAndCareerItem2_data['contact']);

            this.eduAndCareerItems.push(eduAndCareerItem1);
            this.eduAndCareerItems.push(eduAndCareerItem2);
    }

}
