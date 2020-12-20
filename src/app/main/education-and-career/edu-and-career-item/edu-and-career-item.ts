import { EduAndCareerItemPeriod } from './edu-and-career-item-period';

export class EduAndCareerItem {
    constructor(public title: string,
                public description: string,
                public period: EduAndCareerItemPeriod,
                public contact: Object) {
    }
}
