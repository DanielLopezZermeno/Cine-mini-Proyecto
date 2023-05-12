import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { CarteleraService } from '../cartelera/cartelera.service';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css'],
})
export class ReservarComponent implements OnInit {
  date: Date;
  pelicula: Pelicula;

  constructor(
    private route: ActivatedRoute,
    private carteleraService: CarteleraService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pelicula = this.carteleraService.getPeliculaporID(id);
  }
}
