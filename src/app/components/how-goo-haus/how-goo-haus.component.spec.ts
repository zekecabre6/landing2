import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowGooHausComponent } from './how-goo-haus.component';

describe('HowGooHausComponent', () => {
  let component: HowGooHausComponent;
  let fixture: ComponentFixture<HowGooHausComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowGooHausComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowGooHausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
