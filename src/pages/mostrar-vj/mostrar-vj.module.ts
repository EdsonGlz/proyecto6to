import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostrarVjPage } from './mostrar-vj';

@NgModule({
  declarations: [
    MostrarVjPage,
  ],
  imports: [
    IonicPageModule.forChild(MostrarVjPage),
  ],
})
export class MostrarVjPageModule {}
