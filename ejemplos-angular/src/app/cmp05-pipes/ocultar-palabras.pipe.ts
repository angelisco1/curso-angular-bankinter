import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarPalabras'
})
export class OcultarPalabrasPipe implements PipeTransform {

  transform(value: string, palabras: Array<string>, sustituto: string = '*'): string {
    // const a: Array<string> = args[0] as Array<string>

    palabras.forEach((palabra) => {
      // value = value.replaceAll(palabra, sustituto.repeat(palabra.length))
      const regExp = new RegExp(palabra, 'gi')
      value = value.replace(regExp, sustituto.repeat(palabra.length))
    })

    return value;
  }

}
