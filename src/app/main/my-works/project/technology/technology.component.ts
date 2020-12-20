import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.less']
})
export class TechnologyComponent implements OnInit {
    @Input() image: string;

    constructor() { }

    ngOnInit() {
    }

}
