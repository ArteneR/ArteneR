import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.less', './skill.component.mobile.less']
})
export class SkillComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }
    
    @Input() title: string;
    @Input() knowledge_perc: string;
    @Input() image: string;
    @Input() small: boolean;

}
