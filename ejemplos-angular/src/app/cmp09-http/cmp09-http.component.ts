import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tarea } from './tarea';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-cmp09-http',
  templateUrl: './cmp09-http.component.html',
  styleUrls: ['./cmp09-http.component.css']
})
export class Cmp09HttpComponent implements OnInit {
  formTarea: FormGroup
  listaTareas: Array<Tarea> = []

  constructor(private tareasS: TareasService) {
    this.formTarea = new FormGroup({
      titulo: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.tareasS.getTareas()
      .subscribe((resp: Array<Tarea>) => {
        // console.log({resp})
        this.listaTareas = resp
      })
  }

  guardar(): void {
    const tarea = new Tarea(this.formTarea.value.titulo)
    this.tareasS.createTarea(tarea)
      .subscribe((resp: Tarea) => {
        // console.log({resp})
        this.formTarea.reset()
        this.listaTareas.push(resp)
      })
  }

  actualizarTareas(tarea: Tarea) {
    this.listaTareas = this.listaTareas.map(t => {
      if (t.id === tarea.id) {
        return tarea
      }
      return t
    })
  }

}
