import { Component, OnInit } from '@angular/core';

export interface ISugus {
  color: string,
  sabor: string,
}

@Component({
  selector: 'app-cmp04-directivas',
  templateUrl: './cmp04-directivas.component.html',
  styleUrls: ['./cmp04-directivas.component.css']
})
export class Cmp04DirectivasComponent implements OnInit {
  letraNaranjaActivada: boolean = false
  colorSeleccionado: string = '#000000'
  darkMode: boolean = true

  listaSugus: Array<ISugus> = [
    { color: 'yellow', sabor: 'limón' },
    // { color: 'blue', sabor: 'piña' },
    // { color: 'red', sabor: 'fresa' },
  ]

  listaGastos: Array<any> = [
    { concepto: 'Luz', gasto: 150, fecha: new Date() },
    { concepto: 'Agua', gasto: 60, fecha: new Date() },
    { concepto: 'Comida', gasto: 230, fecha: new Date() },
  ]

  lenguajeSeleccionado: string = 'french'
  listaLenguajes: Array<string> = [
    'spanish',
    'english',
    'french',
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleLetraNaranja() {
    this.letraNaranjaActivada = !this.letraNaranjaActivada
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode
  }

  addSugus() {
    this.listaSugus.push({ color: 'orange', sabor: 'naranja' })
  }

}
