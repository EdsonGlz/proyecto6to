import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
import { AnimalPage } from '../animal/animal';

/**
 * Generated class for the BusquedaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {
  items = [];
  animales = [];
  paganimal = AnimalPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.animales = this.navParams.get('animales');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }

  getItems(ev:any){
    console.log(ev.target.value);


    this.items = this.animales.filter(animal=>{
        return animal.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
    });
  }
  verAnimal(animal){
    this.navCtrl.push(this.paganimal, {animal: animal});

}

}
