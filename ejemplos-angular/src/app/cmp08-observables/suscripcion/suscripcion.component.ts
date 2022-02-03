import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { PagosService } from '../pagos.service';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit {
  @Input() servicio: string = ''
  @Input() precio: number = 4.95
  fechaProximoPago: Date | null = null
  activa: boolean = false
  cancelarSub$: EventEmitter<void> = new EventEmitter<void>()

  constructor(private pagos: PagosService) { }

  ngOnInit(): void {
  }

  getFechaProxPago(): Date {
    const fechaActual = new Date()
    fechaActual.setSeconds(fechaActual.getSeconds() + 5)
    return fechaActual
  }

  activar() {
    new Observable((subscriber: Subscriber<string>) => {
      this.fechaProximoPago = this.getFechaProxPago()
      subscriber.next('Te has suscrito correctamente. Se te cobrará el servicio el ' + this.fechaProximoPago.toLocaleTimeString())

      const idInterval = setInterval(() => {
        console.log('Pasa por aquí')
        if (this.pagos.pagar()) {
          this.fechaProximoPago = this.getFechaProxPago()

          subscriber.next('Tu suscripción se ha renovado. Próximo pago: ' + this.fechaProximoPago.toLocaleTimeString())
        } else {
          subscriber.error('No te hemos podido cobrar. Revisa tu método de pago y vuelvete a suscribir.')

          clearInterval(idInterval)
        }
      }, 5000)

      // unsubscribe
      this.cancelarSub$.subscribe(() => {
        subscriber.complete()
        clearInterval(idInterval)
      })

    })
      .subscribe({
        next: (msg: string) => {
          console.log(msg)
          this.activa = true
        },
        error: (error: string) => {
          console.error(error)
          this.activa = false
        },
        complete: () => {
          console.log('Esperamos que vuelvas a suscribirte pronto.')
          this.activa = false
        }
      })
  }

  cancelar() {
    this.cancelarSub$.emit()
  }

}
