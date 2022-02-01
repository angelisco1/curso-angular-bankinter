import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.css']
})
export class FormCvComponent implements OnInit {
  @Input() nombre: string = ''
  @Input() apellidos: string = ''
  @Input() email: string = ''

  @Output() datoCambiado: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  setDato(event: any) {
    this.datoCambiado.emit({
      val: event.target.value,
      key: event.target.name
    })
  }
}
