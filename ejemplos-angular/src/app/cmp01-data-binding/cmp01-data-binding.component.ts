import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp01-data-binding',
  templateUrl: './cmp01-data-binding.component.html',
  styleUrls: ['./cmp01-data-binding.component.css']
})
export class Cmp01DataBindingComponent implements OnInit {
  nombre: string = 'Ángel'
  apellidos: string = 'Villalba Fdez-Paniagua'
  // string, number, boolean, any, null, Array<string>, Array<Array<string>>, string[]
  cualquierCosa: any = 2
  listaDatos: null | Array<string | number> = null
  // listaDatos: null | string[] | number[] = null
  logoAngular: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
  nombreLogo: string = 'Angular'
  textoAlternativo: string = 'Logo de ' + this.nombreLogo


  // Falsy: false, '', 0, null, undefined, NaN
  // Truthy: true, ' ', -1, 4, [], {}, [1, 2]

  constructor() {
    this.cualquierCosa = true
    this.listaDatos = ['Dato 1', 3]
  }

  ngOnInit(): void {
  }

  getNombreCompleto(): string {
    return this.nombre + ' ' + this.apellidos
  }

  saludar(): void {
    alert('Hola ...')
  }

  mostrarPulsacion(msg: string, event?: any): void {
    // console.log(event)
    // if (event) {
    event?.stopPropagation()
    // }
    console.log(msg)
  }

  cambiarNombre(event: any): void {
    console.log(event)
    this.nombre = event.target.value
  }
}
