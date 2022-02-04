import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from '../tarea';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input('tarea') t: Tarea = new Tarea('')
  @Output() tareaCompletada: EventEmitter<Tarea> = new EventEmitter<Tarea>()

  constructor(private tareasS: TareasService) { }

  ngOnInit(): void {
  }

  completar() {
    this.tareasS.completeTarea(this.t)
      .subscribe((resp: Tarea) => {
        // console.log(resp)
        this.tareaCompletada.emit(resp)
      })
  }
}
