import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlimentoService {
  alimentos = [
    {
      name: 'Combo 1',
      description: 'Palomitas de maíz grandes + refresco mediano',
      image:
        'https://gastronomiaycia.republica.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2009/11/analisis_palomitas1.jpg.webp',
      price: 100,
      especial:true,
    },
    {
      name: 'Combo 2',
      description: 'Nachos con queso + refresco grande + Palomitas grandes',
      image: 'https://pbs.twimg.com/media/EwQCmDmW8AI4KAM.jpg',
      price: 250,
      especial:false,
    },
    {
      name: 'Combo 3',
      description: 'Palomitas Grandes + Refresco grande + Hotdog + Snickers',
      image: 'https://pbs.twimg.com/media/EmbHkvNU0AAVVcF.jpg',
      price: 380,
      especial:true,
    },
    {
      name: 'Nachos',
      description: 'Porción de nachos con queso',
      image: 'https://pbs.twimg.com/media/FDe-3qHXsAAS_N_.jpg',
      price: 60,
      especial:false,
    },
  ];

  constructor() {}

  getAlimentos() {
    return this.alimentos;
  }
}
