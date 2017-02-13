import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import {Http} from "@angular/http";
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-list',
  templateUrl: 'samui.html'
})
export class SamuiPage {

  public current_temperature: any;
  public response: any;

  constructor(private http: Http, public storage: Storage) {
    storage.get('samui').then((val) => {
    this.current_temperature = val;
    })
  }

  getClick() {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q={samui}&APPID=623b45a62e136594515369258a9f3c5d').subscribe(
        result => {
          this.current_temperature = (result.json().main.temp - 273.15).toFixed(1);
          this.storage.set('samui', this.current_temperature);
          this.storage.get('samui').then((value) => {
            this.current_temperature = value
          });
        },
        error => console.log('error')
    );
  }
}
