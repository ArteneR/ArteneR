import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAndCareerComponent } from './education-and-career.component';

describe('EducationAndCareerComponent', () => {
  let component: EducationAndCareerComponent;
  let fixture: ComponentFixture<EducationAndCareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationAndCareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationAndCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
