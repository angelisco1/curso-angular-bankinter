import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  miEvento$: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  enviarDato(dato: string): void {
    this.miEvento$.emit(dato)
  }
}