import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoComponent } from './tarjeta-credito/tarjeta-credito.component';
import { OcultarDigitosPipe } from './ocultar-digitos.pipe';



@NgModule({
  declarations: [
    TarjetaCreditoComponent,
    OcultarDigitosPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TarjetaCreditoComponent,
    // OcultarDigitosPipe
  ]
})
export class TarjetasCreditoModule { }
