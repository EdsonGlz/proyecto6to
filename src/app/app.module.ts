import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { AnimalPage } from '../pages/animal/animal';
import { TabPage } from '../pages/tab/tab';
import { VjPage } from '../pages/vj/vj';
import { MostrarVjPage } from '../pages/mostrar-vj/mostrar-vj';
import { ElctronicosPage } from '../pages/elctronicos/elctronicos';
import { MelctronicosPage } from '../pages/melctronicos/melctronicos';
import { BusquedaPage } from '../pages/busqueda/busqueda';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { FavoritosProvider } from '../providers/favoritos/favoritos';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AnimalPage,
    TabPage,
    VjPage,
    MostrarVjPage,
    ElctronicosPage,
    MelctronicosPage,
    BusquedaPage,
    FavoritosPage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnimalPage,
    TabPage,
    VjPage,
    MostrarVjPage,
    ElctronicosPage,
    MelctronicosPage,
    BusquedaPage,
    FavoritosPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
