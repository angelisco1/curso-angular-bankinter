import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective implements OnInit {

  // @HostBinding('style') colorFondo: any = {backgroundColor: 'yellow'}
  // @HostBinding('attr.disabled')
  // @HostBinding('class.tachado')
  @HostBinding('style.backgroundColor') colorFondo: string = 'white'
  @Input('appMarcar') color: string = 'yellow'

  constructor() {
    console.log(this.color)
  }

  ngOnInit(): void {
    if (!this.color) {
      this.color = 'yellow'
    }
    console.log(this.color)
  }

  @HostListener('mouseover') onMouseOver() {
    this.colorFondo = this.color
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorFondo = 'white'
  }

}
