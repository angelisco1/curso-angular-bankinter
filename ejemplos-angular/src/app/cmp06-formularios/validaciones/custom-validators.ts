import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
  static esStark(control: AbstractControl): ValidationErrors | null {
    const listaStarks = ['tony', 'arya', 'robb', 'rickon', 'sansa', 'bran']
    if (listaStarks.includes(control.value.toLowerCase())) {
      return null
    }

    return { esStark: true }
  }

  static passwordMasSegura(mayus: boolean = true, simbolo: boolean = true): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const objErrors: any = {
        mayus: false,
        simbolo: false,
      }

      if (mayus) {
        objErrors.mayus = control.value === control.value.toLowerCase()
      }

      if (simbolo) {
        objErrors.simbolo = !/[,\._-]+/.test(control.value)
      }

      if (objErrors.mayus || objErrors.simbolo) {
        return {passwordMasSegura: objErrors}
      }

      return null

    }

  }

  static repetirPassword(control: AbstractControl): ValidationErrors | null {
    const confirmarPw = control.value
    const passwordControl = control.parent?.get('password')
    const password = passwordControl?.value

    if (password === confirmarPw) {
      return null
    }

    return {
      repetirPassword: true
    }
  }
}