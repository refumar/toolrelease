import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "Renato";
  password: string = "";

  autenticato: boolean = true;

  errMsg: string = "Spiacente, la userId e/o la password sono errati";
  okMsg: string = "Accesso Consentito";



  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  gestAuth = () : void => {
    console.log(this.userId);

    if (this.userId == "Renato" && this.password=="1234") {
      this.route.navigate(['welcome',this.userId]);
      this.autenticato = true;
    }
    else {
      this.autenticato = false;
    }
  }

}
