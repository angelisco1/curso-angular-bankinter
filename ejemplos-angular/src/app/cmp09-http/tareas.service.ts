import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  URL: string = 'https://ejemplos-dc1c1.firebaseio.com/tareas-bankinter/profe/tareas'

  constructor(private http: HttpClient) { }

  // getTareas(): Observable<Array<Tarea>> {
  //   return this.http.get(`${this.URL}.json`)
  // }
}
