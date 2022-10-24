import { IAmbiente } from './../app/models/ambiente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmbientiService {

  ambienti: IAmbiente[] = [
    {pg: 1, prodotto: 'EDOTTO', tipo: 'sviluppo', descrizione: 'Ambiente Prototipo di Edotto', utente_crea: 'Renato', data_crea: new Date(), attivo: true},
    {pg: 2, prodotto: 'SEC-SISR', tipo: 'produzione', descrizione: 'Ambiente di produzione della Calabria', utente_crea: 'Renato', data_crea: new Date(), attivo: false},
    {pg: 3, prodotto: 'SINFONIA', tipo: 'test', descrizione: 'Ambiente di test di Sinfonia', utente_crea: 'Renato', data_crea: new Date(), attivo: true}
  ]

  constructor() { }

  getAmbienti = () : IAmbiente[] => this.ambienti;

  getAmbientiByPg = (pg: number) : IAmbiente => {
    const index = this.ambienti.findIndex(ambiente => ambiente.pg === pg);
    return this.ambienti[index];
  }
}
