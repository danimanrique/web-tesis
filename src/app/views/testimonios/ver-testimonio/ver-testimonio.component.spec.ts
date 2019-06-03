import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTestimonioComponent } from './ver-testimonio.component';

describe('VerTestimonioComponent', () => {
  let component: VerTestimonioComponent;
  let fixture: ComponentFixture<VerTestimonioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTestimonioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTestimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
