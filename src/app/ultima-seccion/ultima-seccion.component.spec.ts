import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimaSeccionComponent } from './ultima-seccion.component';

describe('UltimaSeccionComponent', () => {
  let component: UltimaSeccionComponent;
  let fixture: ComponentFixture<UltimaSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimaSeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimaSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
