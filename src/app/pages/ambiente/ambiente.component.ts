import { AmbientiService } from './../../../services/ambienti.service';
import { IAmbiente } from './../../models/ambiente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ambiente',
  templateUrl: './ambiente.component.html',
  styleUrls: ['./ambiente.component.css']
})
export class AmbienteComponent implements OnInit {

  ambienti: IAmbiente[] = [];

  constructor(private amnienteService: AmbientiService) { }

  ngOnInit(): void {
    this.ambienti = this.amnienteService.getAmbienti();
  }

}
