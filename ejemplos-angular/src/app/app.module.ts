import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';
import { Cmp02VariablesDePlantillaComponent } from './cmp02-variables-de-plantilla/cmp02-variables-de-plantilla.component';
import { Cmp03ComunicacionEntreComponentesComponent } from './cmp03-comunicacion-entre-componentes/cmp03-comunicacion-entre-componentes.component';
import { SugusComponent } from './cmp03-comunicacion-entre-componentes/sugus/sugus.component';
import { FormCvComponent } from './cmp03-comunicacion-entre-componentes/form-cv/form-cv.component';
import { PreviewCvComponent } from './cmp03-comunicacion-entre-componentes/preview-cv/preview-cv.component';
import { Cmp04DirectivasComponent } from './cmp04-directivas/cmp04-directivas.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    Cmp01DataBindingComponent,
    Cmp02VariablesDePlantillaComponent,
    Cmp03ComunicacionEntreComponentesComponent,
    SugusComponent,
    FormCvComponent,
    PreviewCvComponent,
    Cmp04DirectivasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
