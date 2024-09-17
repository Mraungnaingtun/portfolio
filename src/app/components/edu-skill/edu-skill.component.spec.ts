import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduSkillComponent } from './edu-skill.component';

describe('EduSkillComponent', () => {
  let component: EduSkillComponent;
  let fixture: ComponentFixture<EduSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduSkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
