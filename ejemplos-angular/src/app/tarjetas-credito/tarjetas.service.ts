import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  constructor() { }

  getNumTarjeta(): string {
    return '2423 2312 9845 3423'
  }
}
