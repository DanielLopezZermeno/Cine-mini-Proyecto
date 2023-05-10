import { Component, OnInit } from '@angular/core';
import { CarteleraService } from './cartelera.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css'],
  styles: [
    `
  .card {
    margin: 10px;
    width: 300px;
  }
`,
  ],
})
export class CarteleraComponent implements OnInit {
  peliculas: any[];
  colSize = 6;
  constructor(private peliculaService: CarteleraService) {}

  ngOnInit() {
    this.peliculas = this.peliculaService.getPeliculas();
  }
}
