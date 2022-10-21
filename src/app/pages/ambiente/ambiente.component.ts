import { IAmbiente } from './../../models/ambiente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ambiente',
  templateUrl: './ambiente.component.html',
  styleUrls: ['./ambiente.component.css']
})
export class AmbienteComponent implements OnInit {

  ambienti: IAmbiente[] = [
    {pg: 1, prodotto: 'EDOTTO', tipo: 'sviluppo', descrizione: 'Ambiente Prototipo di Edotto', utente_crea: 'Renato', data_crea: new Date(), attivo: true},
    {pg: 2, prodotto: 'SEC-SISR', tipo: 'produzione', descrizione: 'Ambiente di produzione della Calabria', utente_crea: 'Renato', data_crea: new Date(), attivo: false},
    {pg: 3, prodotto: 'SINFONIA', tipo: 'test', descrizione: 'Ambiente di test di Sinfonia', utente_crea: 'Renato', data_crea: new Date(), attivo: true}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
