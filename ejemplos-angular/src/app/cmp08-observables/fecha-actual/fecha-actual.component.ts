import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-fecha-actual',
  templateUrl: './fecha-actual.component.html',
  styleUrls: ['./fecha-actual.component.css']
})
export class FechaActualComponent implements OnInit, OnDestroy {
  fecha: Date = new Date()
  subscription: Subscription | null = null

  constructor() { }

  ngOnInit(): void {
    this.subscription = interval(1000)
      .pipe(
        filter(n => n % 2 !== 0 && n > 5),
        map(n => n-5)
      )
      .subscribe((n) => {
        console.log(n)
        this.fecha = new Date()
      })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
