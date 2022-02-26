import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnIdeaComponent } from './learn-idea.component';

describe('LearnIdeaComponent', () => {
  let component: LearnIdeaComponent;
  let fixture: ComponentFixture<LearnIdeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnIdeaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
