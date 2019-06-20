import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCamposComponent } from './lista-campos.component';

describe('ListaCamposComponent', () => {
  let component: ListaCamposComponent;
  let fixture: ComponentFixture<ListaCamposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCamposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCamposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
