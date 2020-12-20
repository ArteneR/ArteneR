import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSmallComponent } from './skill-small.component';

describe('SkillSmallComponent', () => {
  let component: SkillSmallComponent;
  let fixture: ComponentFixture<SkillSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
