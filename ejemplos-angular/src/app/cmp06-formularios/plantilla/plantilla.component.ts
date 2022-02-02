import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  datosIniciales = {
    username: 'cfalco',
    email: '',
    password: '',
    confirmarPw: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(form: NgForm): void {
    console.log('Registrando...')

    console.log(form)
  }
}
