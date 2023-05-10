import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { AlimentoService } from './alimentos/alimentos.service';
import { UbicanosComponent } from './ubicanos/ubicanos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CarteleraService } from './cartelera/cartelera.service';
@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CarteleraComponent,
    AlimentosComponent,
    UbicanosComponent,
    PerfilComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AlimentoService, CarteleraService],
})
export class AppModule {}
