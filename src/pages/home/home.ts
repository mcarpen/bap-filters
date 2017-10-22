import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    restaurants: any;

    constructor(public navCtrl: NavController) {
        this.initializeRestaurants();
    }

    initializeRestaurants() {
        this.restaurants = [
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
    }

    getRestaurants(ev: any) {
        // Reset items back to all of the items
        this.initializeRestaurants();

        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.restaurants = this.restaurants.filter((restaurant) => {
                return (restaurant.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
}
