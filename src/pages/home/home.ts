import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AnimalPage } from '../animal/animal';
import { BusquedaPage } from '../busqueda/busqueda';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  animales = [];
  Apage = AnimalPage;
  buscar = BusquedaPage;
  fav = FavoritosPage;

  constructor(public navCtrl: NavController,
              public http: HttpClient) {
    this.http.get('/v1/klfst?&category=4020&offset=1&lim=29&lang=es').subscribe(data=> { 
    console.log(JSON.stringify(data));
    if (data.hasOwnProperty("list_ads")){

      this.animales= data["list_ads"];


    }
  },

    error=>{
        console.log(JSON.stringify(error));
    }
  
  )           

}
verAnimal(animal){
  this.navCtrl.push(this.Apage, {animal: animal});
}

clickBuscar(){
  this.navCtrl.push(this.buscar, {animales: this.animales});
}

clickFavoritos(){
  this.navCtrl.push(this.fav, {animales: this.animales});
}


}


