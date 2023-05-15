import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { AlimentoService } from './alimentos/alimentos.service';
import { UbicanosComponent } from './ubicanos/ubicanos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CarteleraService } from './cartelera/cartelera.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservarComponent } from './reservar/reservar.component';
import { SeguroPipe } from './alimentos/seguro.pipe';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CarteleraComponent,
    AlimentosComponent,
    UbicanosComponent,
    PerfilComponent,
    ReservarComponent,
    SeguroPipe,
  ],
  bootstrap: [AppComponent],
  providers: [AlimentoService, CarteleraService],
})
export class AppModule {}
