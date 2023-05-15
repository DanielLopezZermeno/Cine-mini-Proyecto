import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
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
  minFecha: Date;
  constructor(
    private route: ActivatedRoute,
    private carteleraService: CarteleraService,
    private datePipe: DatePipe
  ) {
    this.minFecha = new Date();
    this.minFecha.setDate(this.minFecha.getDate()); // Fecha mínima es en 7 días
    this.minFecha.setHours(0, 0, 0, 0); // Establecer la hora a las 00:00:00.000
  }

  reservar() {
    // Revisar si el usuario existe en el localStorage
    // Obtener el arreglo de usuarios del localStorage
    console.log('fecha=' + this.fecha);
    const reservas = JSON.parse(localStorage.getItem('reserva')) || [];

    // Buscar el usuario ingresado en el arreglo de usuarios
    if (
      reservas.some(
        (reserva) => reserva.fecha === this.fecha || reserva.hora === this.hora
      )
    ) {
      Swal.fire({
        title: 'Funcion no disponible, Intenta otra',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });
      return;
    }

    reservas.push({
      usuario: this.usuario,
      hora: this.hora,
      pelicula: this.pelicula.id,
      fecha: this.fecha,
    });
    // Guardar la información de la reserva en el localStorage
    localStorage.setItem('reserva', JSON.stringify(reservas));

    // Mostrar un mensaje de éxito
    Swal.fire({
      title: 'Funcion reservada con exito!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
    return;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pelicula = this.carteleraService.getPeliculaporID(id);
  }
}
