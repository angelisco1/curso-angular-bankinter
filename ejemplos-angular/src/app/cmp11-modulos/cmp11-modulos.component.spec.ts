import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp11ModulosComponent } from './cmp11-modulos.component';

describe('Cmp11ModulosComponent', () => {
  let component: Cmp11ModulosComponent;
  let fixture: ComponentFixture<Cmp11ModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp11ModulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp11ModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
