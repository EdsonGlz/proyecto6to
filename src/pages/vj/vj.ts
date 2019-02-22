import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MostrarVjPage } from '../mostrar-vj/mostrar-vj';

/**
 * Generated class for the VjPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vj',
  templateUrl: 'vj.html',
})
export class VjPage {
  juegos = [];
  juego = MostrarVjPage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient) {
                  this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es').subscribe(data=> { 
                  console.log(JSON.stringify(data));
                  if (data.hasOwnProperty("list_ads")){
              
                    this.juegos= data["list_ads"];
              
              
                  }
                },
              
                  error=>{
                      console.log(JSON.stringify(error));
                  }
                
                )           
              
              }
              verJuegos(juego){
                this.navCtrl.push(this.juego, {juego: juego});
              }
        }

       
              




