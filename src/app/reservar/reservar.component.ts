import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarteleraService } from '../cartelera/cartelera.service';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css'],
})
export class ReservarComponent implements OnInit {
  fecha: string;
  hora: string;
  pelicula: Pelicula;
  usuario: string;
  constructor(
    private route: ActivatedRoute,
    private carteleraService: CarteleraService
  ) {}
  /*
  reservar() {
    // Revisar si el usuario existe en el localStorage
    const usuarioExiste = localStorage.getItem('usuario') === this.usuario;

    if (usuarioExiste) {
      // Guardar la información de la reserva en el localStorage
      localStorage.setItem(
        'reserva',
        JSON.stringify({
          peliculaId: this.pelicula.id,
          fecha: this.fecha,
          hora: this.hora,
        })
      );

      // Mostrar un mensaje de éxito
      alert('Reserva realizada con éxito!');
    } else {
      // Mostrar un mensaje de error
      alert('Usuario no encontrado!');
    }
  }*/

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pelicula = this.carteleraService.getPeliculaporID(id);
  }
}
