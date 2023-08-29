import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadCarouselComponent } from './head-carousel.component';

describe('HeadCarouselComponent', () => {
  let component: HeadCarouselComponent;
  let fixture: ComponentFixture<HeadCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadCarouselComponent]
    });
    fixture = TestBed.createComponent(HeadCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
