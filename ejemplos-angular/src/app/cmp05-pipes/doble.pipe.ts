import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {
  // ... -> Rest Operator
  // ... -> Spread Operator
  transform(value: number, desc: number = 0): number {
    let resultado = value * 2
    return resultado - desc;
  }

}
