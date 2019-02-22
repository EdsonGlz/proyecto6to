import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MelctronicosPage } from '../melctronicos/melctronicos';

/**
 * Generated class for the ElctronicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elctronicos',
  templateUrl: 'elctronicos.html',
})
export class ElctronicosPage {
  electronicos = [];
  elec = MelctronicosPage;

  constructor(public navCtrl: NavController,
              public http: HttpClient) {
    this.http.get('/v1/klfst?&category=5020&offset=1&lim=29&lang=es').subscribe(data=> { 
    console.log(JSON.stringify(data));
    if (data.hasOwnProperty("list_ads")){

      this.electronicos= data["list_ads"];


    }
  },

    error=>{
        console.log(JSON.stringify(error));
    }
  
  )           

}
verElect(electronico){
  this.navCtrl.push(this.elec, {electronico: electronico});
}

}
