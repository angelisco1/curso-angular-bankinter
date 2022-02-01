import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp03-comunicacion-entre-componentes',
  templateUrl: './cmp03-comunicacion-entre-componentes.component.html',
  styleUrls: ['./cmp03-comunicacion-entre-componentes.component.css']
})
export class Cmp03ComunicacionEntreComponentesComponent implements OnInit {
  nombre: string = 'Charles'
  apellidos: string = 'Falco'
  email: string = 'cfalco@gmail.com'

  constructor() { }

  ngOnInit(): void {
  }

  cambiarDato(cambios: any) {

    // this[cambios.key] = cambios.val

    switch(cambios.key) {
      case 'nombre':
        this.nombre = cambios.val
        break
      case 'apellidos':
        this.apellidos = cambios.val
        break
      case 'email':
        this.email = cambios.val
        break
    }
  }

  get styles() {
    return {
      display: 'flex',
      justifyContent: 'space-evenly'
    }
  }

}
