import { Component, OnInit } from '@angular/core';

interface IProducto {
  nombre: string,
  precio: number,
  descripcion: string,
  fecha: Date,
  caracteristicas: {
    [key: string]: string | number
  }
}

@Component({
  selector: 'app-cmp05-pipes',
  templateUrl: './cmp05-pipes.component.html',
  styleUrls: ['./cmp05-pipes.component.css']
})
export class Cmp05PipesComponent implements OnInit {
  producto: IProducto = {
    nombre: 'one plus 10',
    descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ipsa aut architecto maiores. Cumque accusantium repellendus, architecto neque veniam magnam obcaecati amet sequi, voluptatem ad voluptatibus molestias in delectus iusto.',
    precio: 800,
    fecha: new Date(),
    caracteristicas: {
      mpx: 80,
      peso: '60gr',
      ram: 24
    }
  }

  mascotas: Array<string> = [
    'perro',
    'gato',
    'canario',
  ]
  txtFiltro: string = ''
  numero: number = 5
  promesaMsg: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('El canario está en la jaula...')
    }, 3000)
  })

  constructor() { }

  ngOnInit(): void {
  }

  addMascota(event: any): void {
    // this.mascotas.push(event.target.value)
    const nuevaMascota = event.target.value
    this.mascotas = [...this.mascotas, nuevaMascota]
  }

}
