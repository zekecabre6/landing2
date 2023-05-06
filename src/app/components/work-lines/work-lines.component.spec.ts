import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLinesComponent } from './work-lines.component';

describe('WorkLinesComponent', () => {
  let component: WorkLinesComponent;
  let fixture: ComponentFixture<WorkLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkLinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
