import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusquedaPage } from '../busqueda/busqueda';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the AnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animal',
  templateUrl: 'animal.html',
})
export class AnimalPage {
  animal = {};
  buscar = BusquedaPage;
  imgs=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider) {
  this.animal = this.navParams.get('animal');
  if(this.animal.ad.hasOwnProperty('images')){
    this.imgs = this.animal.ad.images;
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalPage');
  }
  favoritos(animal){
    this.fav.addFavoritos(animal);
  }
}
