import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
@Component({
  selector: 'app-ubicanos',
  templateUrl: './ubicanos.component.html',
  styleUrls: ['./ubicanos.component.css'],
})
export class UbicanosComponent implements OnInit {
  messages: Message[];
  constructor() {}

  ngOnInit() {
    this.messages = [
      {
        severity: 'warn',
        summary: 'Proyecto Univesitario',
        detail: '',
      },
    ];
  }
}
