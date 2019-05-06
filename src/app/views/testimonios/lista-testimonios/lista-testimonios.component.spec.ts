import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTestimoniosComponent } from './lista-testimonios.component';

describe('ListaTestimoniosComponent', () => {
  let component: ListaTestimoniosComponent;
  let fixture: ComponentFixture<ListaTestimoniosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTestimoniosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTestimoniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
