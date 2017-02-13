import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';


import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-list',
  templateUrl: 'moscow.html'
})

export class MoscowPage {
  public current_temperature: any;
    public response:any;
    constructor(private http: Http, public storage: Storage) {
    storage.get('moscow').then((val) => {
    this.current_temperature = val;
    })
  }
    getClick() {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q={moscow}&APPID=623b45a62e136594515369258a9f3c5d').subscribe(
        result => {
          this.current_temperature = (result.json().main.temp - 273.15).toFixed(1);
          this.storage.set('moscow', this.current_temperature);
          this.storage.get('moscow').then((value) => {
            this.current_temperature = value
          });
        },
        error => console.log('error')
    );
  }
}


// export class MoscowPage {
//   selectedItem: any;
//   icons: string[];
//   items: Array<{title: string, note: string, icon: string}>;
//
//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//     // If we navigated to this page, we will have an item available as a nav param
//     this.selectedItem = navParams.get('item');
//
//     this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
//     'american-football', 'boat', 'bluetooth', 'build'];
//
//     this.items = [];
//     for(let i = 1; i < 11; i++) {
//       this.items.push({
//         title: 'Item ' + i,
//         note: 'This is item #' + i,
//         icon: this.icons[Math.floor(Math.random() * this.icons.length)]
//       });
//     }
//   }
//
//   itemTapped(event, item) {
//     this.navCtrl.push(ItemDetailsPage, {
//       item: item
//     });
//   }
// }
