import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { PerfilPageRoutingModule } from '../perfil/perfil-routing.module';
import { RouterModule } from '@angular/router';
import { PerfilPageModule } from '../perfil/perfil.module';
import { PerfilPage } from '../perfil/perfil.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PerfilPageRoutingModule,
    RouterModule
    ],
  declarations: [HomePage]
})
export class HomePageModule {}
