import { Component, OnInit } from '@angular/core';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css']
})
export class CmpAComponent implements OnInit {

  constructor(private eventos: EventosService) { }

  ngOnInit(): void {
  }

  enviarDato(event: any): void {
    this.eventos.enviarDato(event.target.value)
  }

}
