import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.less', './section-title.component.mobile.less']
})
export class SectionTitleComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    
    @Input() title: string;

}
