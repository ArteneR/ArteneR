import { Component, OnInit } from '@angular/core';

import { EduAndCareerItem } from '../../main/education-and-career/edu-and-career-item/edu-and-career-item';
import * as eduAndCareerData from '../../../assets/data/education-and-career.json';

@Component({
  selector: 'app-education-and-career',
  templateUrl: './education-and-career.component.html',
  styleUrls: ['./education-and-career.component.less', './education-and-career.component.mobile.less']
})
export class EducationAndCareerComponent implements OnInit {
    eduAndCareerData: any = eduAndCareerData;
    eduAndCareerItems: Array<EduAndCareerItem> = [];
    readonly DEFAULT_LANG = 'en';

    constructor() { }

    ngOnInit() {
        Object.keys(this.eduAndCareerData.default).forEach(id => {
            let eduAndCareerItem = this.eduAndCareerData.default[id][this.DEFAULT_LANG];
            this.eduAndCareerItems.push(new EduAndCareerItem(
                parseInt(id),
                eduAndCareerItem.title,
                eduAndCareerItem.description,
                eduAndCareerItem.period,
                eduAndCareerItem.contact,
                eduAndCareerItem.image
            ));
        });
    }
}