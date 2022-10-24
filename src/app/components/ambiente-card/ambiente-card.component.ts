import { IAmbiente } from './../../models/ambiente';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ambiente-card',
  templateUrl: './ambiente-card.component.html',
  styleUrls: ['./ambiente-card.component.css']
})
export class AmbienteCardComponent implements OnInit {

  constructor() { }

  @Input()
  ambiente: IAmbiente = {
    pg: 0,
    prodotto: '',
    tipo: '',
    descrizione: '',
    utente_crea: '',
    data_crea: new Date(),
    attivo: true
  }

  @Output()
  delete = new EventEmitter();
  @Output()
  edit = new EventEmitter();


  ngOnInit(): void {
  }

  editArt = () => this.edit.emit(this.ambiente.pg);

  delArt = () => this.delete.emit(this.ambiente.pg);

}
