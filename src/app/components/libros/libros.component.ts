import { Component, OnInit } from '@angular/core';

import {Libreria, ListaLibros} from '../../interfaces/libreria';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})

export class LibrosComponent implements OnInit {

  Lista = ListaLibros;

  constructor() { }

  ngOnInit(): void {
  }

}
