import { AuthappService } from './../../../services/authapp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(protected BasicAuth: AuthappService) { }

  ngOnInit(): void {
  }

}
