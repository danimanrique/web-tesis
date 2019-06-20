import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCampoComponent } from './ver-campo.component';

describe('VerCampoComponent', () => {
  let component: VerCampoComponent;
  let fixture: ComponentFixture<VerCampoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCampoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
