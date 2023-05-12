import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  mensaje: string;
  constructor(private router: Router) {}
  ngOnInit() {}
  registro() {
    // validamos que todos los campos estén llenos
    if (!this.username || !this.email || !this.password) {
      this.mensaje = 'Por favor rellene todos los campos.';
      return;
    }

    // validamos si el usuario ya existe en localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    if (usuarios.some((usuario) => usuario.username === this.username)) {
      this.mensaje = 'Este usuario ya existe, por favor intente con otro.';
      return;
    }

    // guardamos el nuevo usuario en localStorage
    usuarios.push({
      username: this.username,
      email: this.email,
      password: this.password,
    });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // mostramos un mensaje de éxito
    this.mensaje = 'Usuario creado exitosamente.';
  }

  iniciar() {
    // validamos que todos los campos estén llenos
    if (!this.username || !this.password) {
      this.mensaje = 'Por favor rellene todos los campos.';
      return;
    }

    // validamos si el usuario existe en localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(
      (usuario) =>
        usuario.username === this.username && usuario.password === this.password
    );
    if (!usuario) {
      this.mensaje =
        'Nombre de usuario o contraseña incorrectos, por favor intente de nuevo.';
      return;
    }

    // creamos la sesión del usuario en localStorage
    localStorage.setItem('sesion', JSON.stringify(usuario));

    // mostramos un mensaje de éxito
    this.mensaje = 'Inicio de sesión exitoso.';
  }
}
