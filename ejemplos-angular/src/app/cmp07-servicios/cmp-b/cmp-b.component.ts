import { Component, OnInit } from '@angular/core';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css']
})
export class CmpBComponent implements OnInit {
  mensaje: string = ''
  constructor(private eventos: EventosService) { }

  ngOnInit(): void {
    this.eventos.miEvento$.subscribe((dato: string) => {
      this.mensaje = dato
    })
  }

}
