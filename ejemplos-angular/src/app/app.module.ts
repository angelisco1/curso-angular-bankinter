import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';
import { Cmp02VariablesDePlantillaComponent } from './cmp02-variables-de-plantilla/cmp02-variables-de-plantilla.component';
import { Cmp03ComunicacionEntreComponentesComponent } from './cmp03-comunicacion-entre-componentes/cmp03-comunicacion-entre-componentes.component';
import { SugusComponent } from './cmp03-comunicacion-entre-componentes/sugus/sugus.component';
import { FormCvComponent } from './cmp03-comunicacion-entre-componentes/form-cv/form-cv.component';
import { PreviewCvComponent } from './cmp03-comunicacion-entre-componentes/preview-cv/preview-cv.component';
import { Cmp04DirectivasComponent } from './cmp04-directivas/cmp04-directivas.component';
import { MarcarDirective } from './cmp04-directivas/marcar.directive';
import { Cmp05PipesComponent } from './cmp05-pipes/cmp05-pipes.component';
import { FiltroPipe } from './cmp05-pipes/filtro.pipe';
import { DoblePipe } from './cmp05-pipes/doble.pipe';
import { OcultarPalabrasPipe } from './cmp05-pipes/ocultar-palabras.pipe';
import { Cmp06FormulariosComponent } from './cmp06-formularios/cmp06-formularios.component';
import { ReactivoComponent } from './cmp06-formularios/reactivo/reactivo.component';
import { PlantillaComponent } from './cmp06-formularios/plantilla/plantilla.component';
import { ErrorFormComponent } from './cmp06-formularios/error-form/error-form.component';
import { Cmp07ServiciosComponent } from './cmp07-servicios/cmp07-servicios.component';
import { CmpAComponent } from './cmp07-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp07-servicios/cmp-b/cmp-b.component';
import { Cmp08ObservablesComponent } from './cmp08-observables/cmp08-observables.component';
import { FechaActualComponent } from './cmp08-observables/fecha-actual/fecha-actual.component';
import { SuscripcionComponent } from './cmp08-observables/suscripcion/suscripcion.component';
import { Cmp09HttpComponent } from './cmp09-http/cmp09-http.component';
import { TareaComponent } from './cmp09-http/tarea/tarea.component';

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
    Cmp04DirectivasComponent,
    MarcarDirective,
    Cmp05PipesComponent,
    FiltroPipe,
    DoblePipe,
    OcultarPalabrasPipe,
    Cmp06FormulariosComponent,
    ReactivoComponent,
    PlantillaComponent,
    ErrorFormComponent,
    Cmp07ServiciosComponent,
    CmpAComponent,
    CmpBComponent,
    Cmp08ObservablesComponent,
    FechaActualComponent,
    SuscripcionComponent,
    Cmp09HttpComponent,
    TareaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
