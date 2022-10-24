import { IAmbiente } from './../../models/ambiente';
import { AmbientiService } from './../../../services/ambienti.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-ambienti',
  templateUrl: './grid-ambienti.component.html',
  styleUrls: ['./grid-ambienti.component.css']
})
export class GridAmbientiComponent implements OnInit {

  ambiente$ : IAmbiente[] = [];

  constructor(private ambientiService: AmbientiService) { }

  ngOnInit(): void {
    this.ambiente$ = this.ambientiService.getAmbienti();
    console.log(this.ambiente$);
  }

  handleEdit = (pg : number) => {
    console.log("Cliccato tasto modifica del codice " + pg);
  }

  handleDelete = (pg : number) => {
    console.log("Cliccato tasto elimina del codice " + pg);

    this.ambiente$.splice(this.ambiente$.findIndex(x => x.pg === pg),1);
    console.log(this.ambiente$);

  }

}
