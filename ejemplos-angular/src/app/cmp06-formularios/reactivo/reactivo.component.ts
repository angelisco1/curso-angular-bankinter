import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CustomValidators } from '../validaciones/custom-validators';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {
  form: FormGroup

  constructor() {
    this.form = new FormGroup({
      username: new FormControl('cfalco', [
        Validators.required,
        CustomValidators.esStark
      ]),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        CustomValidators.passwordMasSegura(true, true)
      ]),
      confirmarPw: new FormControl('', [
        Validators.required,
        CustomValidators.repetirPassword
      ]),
    })
  }

  ngOnInit(): void {
  }

  guardar(): void {
    console.log(this.form)
  }

  getErrors(name: string): ValidationErrors | null | undefined {
    return this.form.get(name)?.errors
  }

  getPintarErrores(name: string): boolean | undefined {
    return this.form.get(name)?.invalid && this.form.get(name)?.dirty
  }
}
