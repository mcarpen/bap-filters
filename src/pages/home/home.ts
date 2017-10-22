import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    originalData: any;
    modifiedData: any;

    constructor(public navCtrl: NavController) {

        this.originalData = [
            {
                "name": "Thaun Kroûn",
                "type": "thailandaise"
            },
            {
                "name": "Thai Time",
                "type": "thailandaise"
            },
            {
                "name": "Num",
                "type": "thailandaise"
            },
            {
                "name": "Oky Sushi",
                "type": "japonaise"
            },
            {
                "name": "Ginza 2",
                "type": "japonaise"
            },
            {
                "name": "New Song Tian",
                "type": "japonaise"
            },
            {
                "name": "Monteleone",
                "type": "gastronomique"
            },
            {
                "name": "Au Port du Salut",
                "type": "gastronomique"
            },
            {
                "name": "La Bouteille d'Or",
                "type": "gastronomique"
            },
            {
                "name": "Tutti Quanti",
                "type": "italienne"
            },
            {
                "name": "L'Italiano",
                "type": "italienne"
            },
            {
                "name": "Taverna d'Umberto",
                "type": "italienne"
            }
        ];

        this.modifiedData = JSON.parse(JSON.stringify(this.originalData));
    }
}
