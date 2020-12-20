import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduAndCareerItemComponent } from './edu-and-career-item.component';

describe('EduAndCareerItemComponent', () => {
  let component: EduAndCareerItemComponent;
  let fixture: ComponentFixture<EduAndCareerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduAndCareerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduAndCareerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
