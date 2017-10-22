import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RestoDataProvider} from '../../providers/resto-data/resto-data';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    resto: any;

    constructor(public navCtrl: NavController, public restoData: RestoDataProvider) {
        this.resto = restoData;
        this.resto.getData();
    }

}
