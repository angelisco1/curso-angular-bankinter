import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.css']
})
export class ErrorFormComponent implements OnInit {
  @Input() errores: any = null
  listaErrores: Array<string> = []

  constructor() { }

  ngOnInit(): void {


  }

}
