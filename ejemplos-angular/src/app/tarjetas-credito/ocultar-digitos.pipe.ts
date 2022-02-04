import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarDigitos'
})
export class OcultarDigitosPipe implements PipeTransform {

  transform(value: string): string {
    const parteVisible = value.slice(-4)
    const parteOculta = value.slice(0, -4).replace(/\d/g, '*')

    return parteOculta + parteVisible;
  }

}
