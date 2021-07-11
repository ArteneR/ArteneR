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
        var eduAndCareerItemsData = [
            {
                'title': "Working at TitleCapture",
                'description': "Since september 2017 I have been working at TitleCapture, a Miami, Florida based company. My positon here is as a full stack web developer / junior devops. Being a relatively small to medium sized company, I really like that I get to work on many and diverse things, experiment with different technologies and really get to see my footprint within the company.",
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
            },
            {
                'title': "Worked at Nokia (former Alcatel)",
                'description': "Starting with the year 2015, I have worked at Nokia as a junior software developer. At that time, I was in the 2nd year of University and I can say that the knowledge that I gained at my workplace was of great value. I had the chance to work on a very interesting tool with medical appointments and yearly check-up reminders for the company employees and it was satisfying to see that both the employees and the medical office personel were using the tool and found it useful.",
                'period': {
                    'start': {
                        'year': "2015",
                        'month': "Dec"
                    },
                    'end': {
                        'year': "2017",
                        'month': "Jul"
                    }
                },
                'contact': {
                    'phone': "0725242362",
                    'email': "georgevici.ioan@gmail.com"
                }
            },
            {
                'title': "Went in the USA with the Work&Travel program",
                'description': "During the summer holiday of the year 2015, I went in the USA with the Work&Travel program for students. There, I have stayed and worked in Ocean City, Maryland, on the east coast and it was an absolutely amazing and never forgetting experience! Just before returning home, I got the chance to visit New York City as well, the city that never sleeps (and also my dream city :D) - words can't describe how awesome the whole trip was!",
                'period': {
                    'start': {
                        'year': "2015",
                        'month': "Jun"
                    },
                    'end': {
                        'year': "2015",
                        'month': "Sept"
                    }
                },
                'contact': {
                    'phone': "",
                    'email': ""
                }
            },
            {
                'title': "Studied at Politehnica University of Timisoara",
                'description': "Between 2013 and 2017 I have studied for my Bachelor's degree at Politehnica University of Timisoara. My field of study was Computer Science, the english section. University was a strong pillar for my education and career, as I have learned many technology related concepts which later on proved to be extremely useful at my work places.",
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
                    'phone': "",
                    'email': ""
                }
            },
            {
                'title': "Studied at William Shakespeare highschool",
                'description': "Between 2009 and 2013 I went to William Shakespeare highschool from Timisoara at the information-mathematics section.",
                'period': {
                    'start': {
                        'year': "2009",
                        'month': "Sept"
                    },
                    'end': {
                        'year': "2013",
                        'month': "Jun"
                    }
                },
                'contact': {
                    'phone': "",
                    'email': ""
                }
            }
        ];

        this.eduAndCareerItems = eduAndCareerItemsData.map(item => new EduAndCareerItem(item['title'], item['description'], item['period'], item['contact']));
    }

}
