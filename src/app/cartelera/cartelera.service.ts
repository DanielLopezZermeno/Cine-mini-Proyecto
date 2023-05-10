import { Injectable } from '@angular/core';
import { Pelicula } from '../pelicula';

@Injectable()
export class CarteleraService {
  peliculas: Pelicula[] = [
    {
      titulo: 'Spider-Man: No Way Home',
      imagenUrl:
        'https://blog.es.playstation.com/tachyon/sites/14/2022/06/adf0c6e3da060a9f9581c12eff047a48668fe616.jpg?resize=1088%2C612&crop_strategy=smart',
      alturaTarjeta: 300,
    },
    {
      titulo: 'Dune',
      imagenUrl: 'https://pics.filmaffinity.com/Dune-209834814-large.jpg',
      alturaTarjeta: 500,
    },
    {
      titulo: 'El Conjuro 3: el diablo me obligó a hacerlo',
      imagenUrl:
        'https://hbomax-images.warnermediacdn.com/images/GYOYX9gphVFOLNgEAAAQR/tileburnedin?size=1280x720&partner=hbomaxcom&v=892d4950643ab22e60920a4308d4f5b9&host=art-gallery.api.hbo.com&language=es-419&w=1280',
      alturaTarjeta: 350,
    },
    {
      titulo: 'No Time to Die',
      imagenUrl:
        'https://pics.filmaffinity.com/Sin_tiempo_para_morir-525355918-large.jpg',
      alturaTarjeta: 500,
    },
    {
      titulo: 'A Quiet Place Part II',
      imagenUrl:
        'https://1.bp.blogspot.com/-EFUOjNt2W6g/YSbddmov4bI/AAAAAAAAIAs/5VAkOLHdvjI4yD8Kr1RmAs--QDA9eX0ogCLcBGAsYHQ/s1481/A%2BQuiet%2BPlace%2BPart%2BII%2BPoster.jpg',
      alturaTarjeta: 490,
    },
    {
      titulo: 'House of Gucci',
      imagenUrl:
        'https://dx35vtwkllhj9.cloudfront.net/united-artists-releasing/house-of-gucci/images/regions/us/share.png',
      alturaTarjeta: 300,
    },
    {
      titulo: 'Licorice Pizza',
      imagenUrl:
        'https://pics.filmaffinity.com/Licorice_Pizza-862632135-large.jpg',
      alturaTarjeta: 300,
    },
    {
      titulo: 'Dont Look Up',
      imagenUrl:
        'https://occ-0-41-444.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTAH2e0NA2CoezoBJfVTh4dIvdQWcFcZielMUf9VEWZJFk0bys6yAEl_h5RPoIwh6muQbXaTJP4H9WPwAWUQLZPV3cE9HsWSPOUR.jpg?r=6a0',
      alturaTarjeta: 300,
    },
    {
      titulo: 'Eternals',
      imagenUrl: 'https://i.ytimg.com/vi/MKWXuj3ZYf0/maxresdefault.jpg',
      alturaTarjeta: 300,
    },
    {
      titulo: 'The French Dispatch',
      imagenUrl:
        'https://m.media-amazon.com/images/M/MV5BNmQxZTNiODYtNzBhYy00MzVlLWJlN2UtNTc4YWZjMDIwMmEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      alturaTarjeta: 300,
    },
    {
      titulo: 'Belfast',
      imagenUrl:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7S7p5wwDD-RIjAqDdWgRfn7Wgh-_GjX-5PFT-eNFlmbgbl8BThwLQgxW0_qgBFLV90iJX6PwcwtpXTZfQC-O3doZNRUlbdLgHxtJvrlK4U5959ACnTxJOWeSboDIUSxo5rTDH95m-jjdtiSK5nPz4-Zd3WO6pfhd0jWc2NBjJLWI3VmlYZGoPwMPr/s900/BelfastCriticaPelicula.jpg',
      alturaTarjeta: 300,
    },
  ];

  constructor() {}
  getPeliculas() {
    return this.peliculas;
  }
}
