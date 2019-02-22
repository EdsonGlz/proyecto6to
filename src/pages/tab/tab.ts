import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AnimalPage } from '../animal/animal';
import { VjPage } from '../vj/vj';
import { ElctronicosPage } from '../elctronicos/elctronicos';
import { BusquedaPage } from '../busqueda/busqueda';

/**
 * Generated class for the TabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
  tab1 = HomePage;
  tab2 = VjPage;
  tab3 = ElctronicosPage;

  buscar = BusquedaPage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
