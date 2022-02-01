import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-sugus',
  templateUrl: './sugus.component.html',
  styleUrls: ['./sugus.component.css']
})
export class SugusComponent implements OnInit {
  @Input() color: string = 'yellow'
  @Input() sabor: string = 'limón'
  key: string = 'backgroundColor'

  constructor() { }

  ngOnInit(): void {
  }

  get styles() {
    return {
      [this.key]: this.color
    }
  }

  getStyles() {
    return {
      [this.key]: this.color
    }
  }

}
