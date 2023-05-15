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

  reservar(formulario: any) {
    const usuario = formulario.usuario;
    const fecha = formulario.fecha;
    const hora = formulario.hora;
    console.log(usuario);
    // Revisar si el usuario existe en el localStorage
    // Obtener el arreglo de usuarios del localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    // Buscar el usuario ingresado en el arreglo de usuarios
    const usuarioExiste = usuarios.find((u) => u.username === usuario);

    if (usuarioExiste) {
      // Guardar la información de la reserva en el localStorage
      localStorage.setItem(
        'reserva',
        JSON.stringify({
          peliculaId: this.pelicula.id,
          fecha: fecha,
          hora: hora,
        })
      );

      // Mostrar un mensaje de éxito
      alert('Reserva realizada con éxito!');
    } else {
      // Mostrar un mensaje de error
      alert('Usuario no encontrado!');
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pelicula = this.carteleraService.getPeliculaporID(id);
  }
}
