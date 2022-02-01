import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp03ComunicacionEntreComponentesComponent } from './cmp03-comunicacion-entre-componentes.component';

describe('Cmp03ComunicacionEntreComponentesComponent', () => {
  let component: Cmp03ComunicacionEntreComponentesComponent;
  let fixture: ComponentFixture<Cmp03ComunicacionEntreComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp03ComunicacionEntreComponentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp03ComunicacionEntreComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
