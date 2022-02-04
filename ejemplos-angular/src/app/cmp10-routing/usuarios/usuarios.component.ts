import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Array<any> = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Esta petición está mejor en un servicio
    this.http.get<Array<any>>('http://jsonplaceholder.typicode.com/users')
      .subscribe((usuarios: Array<any>) => {
        this.usuarios = usuarios
      })
  }

}
