import { EduAndCareerItemPeriod } from './edu-and-career-item-period';
import { EduAndCareerItemContact } from './edu-and-career-item-contact';

export class EduAndCareerItem {
    constructor(public id: number,
                public title: string,
                public description: string,
                public period: EduAndCareerItemPeriod,
                public contact: EduAndCareerItemContact,
                public image: string) {
    }
}
