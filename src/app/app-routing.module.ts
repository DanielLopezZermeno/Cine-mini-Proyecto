import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UbicanosComponent } from './ubicanos/ubicanos.component';
const routes: Routes = [
  { path: '', redirectTo: '/cartelera', pathMatch: 'full' },
  { path: 'cartelera', component: CarteleraComponent },
  { path: 'alimentos', component: AlimentosComponent },
  { path: 'ubicanos', component: UbicanosComponent },
  { path: 'perfil', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
