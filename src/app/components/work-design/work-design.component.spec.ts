import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDesignComponent } from './work-design.component';

describe('WorkDesignComponent', () => {
  let component: WorkDesignComponent;
  let fixture: ComponentFixture<WorkDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
