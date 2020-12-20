import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-small',
  templateUrl: './skill-small.component.html',
  styleUrls: ['./skill-small.component.less', './skill-small.component.mobile.less']
})
export class SkillSmallComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }
    
    @Input() title: string;
    @Input() knowledge_perc: string;
    @Input() image: string;
    @Input() small: boolean;

}
