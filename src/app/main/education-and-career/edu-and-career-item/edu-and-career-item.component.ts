import { Component, OnInit, Input } from '@angular/core';

import { EduAndCareerItem } from './edu-and-career-item';

@Component({
  selector: 'app-edu-and-career-item',
  templateUrl: './edu-and-career-item.component.html',
  styleUrls: ['./edu-and-career-item.component.less', './edu-and-career-item.component.mobile.less']
})
export class EduAndCareerItemComponent implements OnInit {
    @Input() eduAndCareerItem: EduAndCareerItem;

    constructor() { }

    ngOnInit() {
    }

}
