import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor() { }

  pagar() {
    const num = Math.floor(Math.random()*11)
    const numsPagos = [0, 1, 2, 4, 6, 7, 8, 10]
    return numsPagos.includes(num)
  }
}
