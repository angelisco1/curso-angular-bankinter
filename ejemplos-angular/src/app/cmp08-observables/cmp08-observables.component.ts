import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp08-observables',
  templateUrl: './cmp08-observables.component.html',
  styleUrls: ['./cmp08-observables.component.css']
})
export class Cmp08ObservablesComponent implements OnInit {
  mostrarFecha: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  toggleFecha() {
    this.mostrarFecha = !this.mostrarFecha
  }
}
