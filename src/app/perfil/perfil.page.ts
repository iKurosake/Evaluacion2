import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goBack() {  
    this.router.navigate(['home']);
  }
}
export class AppComponent {
  name = 'FABIAN ANDRES LECAROS QUEZADA';

  strengths = [];

  users = [
    {
      "name": "CAMILA",
    },
    {
      "name": "FELIPE",   
    },
    {
      "name": "SEBASTIAN",     
    }
  ];

}

