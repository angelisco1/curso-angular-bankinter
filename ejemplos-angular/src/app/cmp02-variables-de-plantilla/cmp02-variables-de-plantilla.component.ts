import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp02-variables-de-plantilla',
  templateUrl: './cmp02-variables-de-plantilla.component.html',
  styleUrls: ['./cmp02-variables-de-plantilla.component.css']
})
export class Cmp02VariablesDePlantillaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrar(inputRef: HTMLInputElement): void {
    console.dir(inputRef)
    alert(inputRef.value)
  }

  play(videoRef: HTMLMediaElement): void {
    // console.dir(videoRef)
    videoRef.play()
  }

  pause(videoRef: HTMLMediaElement): void {
    videoRef.pause()
  }

  cambiarVolumen(videoRef: HTMLMediaElement, event: any): void {
    videoRef.volume = event.target.value / 100
  }
}
