import { Component, OnInit } from '@angular/core';
import { AlimentoService } from './alimentos.service';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css'],
  styles: [
    `
  .card {
    margin: 10px;
    width: 300px;
  }
`,
  ],
})
export class AlimentosComponent implements OnInit {
  alimentos: any[];
  video = 'bKL1OqdXtTs';
  constructor(private alimentoService: AlimentoService) {}

  ngOnInit() {
    this.alimentos = this.alimentoService.getAlimentos();
  }
}
