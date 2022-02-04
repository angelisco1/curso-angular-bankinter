import { RouterModule, Routes } from "@angular/router";
import { Error404Component } from "./error404/error404.component";
import { AuthGuard } from "./guards/auth.guard";
import { InfoUsuarioComponent } from "./info-usuario/info-usuario.component";
import { NuevoUsuarioComponent } from "./nuevo-usuario/nuevo-usuario.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";

const USUARIOS_ROUTES: Routes = [
  { path: ':id', component: InfoUsuarioComponent, canActivate: [AuthGuard] },
]

const APP_ROUTES: Routes = [
  { path: 'usuarios', component: UsuariosComponent, children: USUARIOS_ROUTES },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: '**', component: Error404Component },
]

// localhost:4200/usuarios/2
// localhost:4200/usuarios/90
// localhost:4200/usuarios/91230
// localhost:4200/usuarios/asads
// localhost:4200/
// localhost:4200/nuevo-usuario

export const RoutingModule = RouterModule.forRoot(APP_ROUTES)