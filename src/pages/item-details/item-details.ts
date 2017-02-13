import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, storage: Storage) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    storage.set('name', 'name');
    storage.set('name1', 'name1');
    storage.get('name').then((val) => {
      console.log('Your name is', val);
    })
    storage.get('name1').then((val) => {
      console.log('Your name is', val);
    })
  }
}
