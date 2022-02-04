import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {
  id: string = ''
  // infoUsuario: any = null
  usuario$: Observable<any> = new Observable()

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Init')

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      // console.log({params})
      if (params.get('id')) {
        this.id = params.get('id')!
        // Esta petición está mejor en un servicio
        this.usuario$ = this.http.get('http://jsonplaceholder.typicode.com/users/' + this.id)
          // .subscribe(resp => {
          //   this.infoUsuario = resp
          // })
      }

    })
  }

}
