import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the MelctronicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-melctronicos',
  templateUrl: 'melctronicos.html',
})
export class MelctronicosPage {
  electronico = {};
  imgs=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,  public fav: FavoritosProvider) {
    this.electronico = this.navParams.get("electronico")
    if(this.electronico.ad.hasOwnProperty('images')){
      this.imgs = this.electronico.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MelctronicosPage');
  }

  favoritos(electronico){
    this.fav.addFavoritos(electronico);
  }

}
