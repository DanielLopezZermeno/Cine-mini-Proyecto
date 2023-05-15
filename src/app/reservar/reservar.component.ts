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

  reservar() {
    // Revisar si el usuario existe en el localStorage
    // Obtener el arreglo de usuarios del localStorage
    const reservas = JSON.parse(localStorage.getItem('reserva')) || [];

    // Buscar el usuario ingresado en el arreglo de usuarios
    if (
      reservas.some(
        (reserva) => reserva.fecha === this.fecha || reserva.hora === this.hora
      )
    ) {
      alert('Funcion no disponible');
      return;
    }
    reservas.push({
      usuario: this.usuario,
      fecha: this.fecha,
      hora: this.hora,
      pelicula: this.pelicula.id,
    });
    // Guardar la información de la reserva en el localStorage
    localStorage.setItem('reserva', JSON.stringify(reservas));

    // Mostrar un mensaje de éxito
    alert('Reserva realizada con éxito!');
    return;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pelicula = this.carteleraService.getPeliculaporID(id);
  }
}
