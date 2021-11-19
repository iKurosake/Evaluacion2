import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { PerfilPage } from '../perfil/perfil.page';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  formularioLogin: FormGroup;
  
  constructor(public fb: FormBuilder, public alertController: AlertController  , private router: Router) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }
  async ingresar(): Promise<void>{
    var f = this.formularioLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos ingresados no son correctos.',
        buttons: ['Aceptar']
      })
    }

  }
  go() {  
    this.router.navigate(['/perfil']); 
    this.router.navigate(['/registro']);
  }
  

}
