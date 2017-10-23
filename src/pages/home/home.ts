import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    restaurants: any;
    type: Array<string>;

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
            },
            {
                "name": "Les Passagers de Beyrouth",
                "type": "libanaise"
            },
            {
                "name": "Yara",
                "type": "libanaise"
            },
            {
                "name": "Bistrot Beyrouth",
                "type": "libanaise"
            },
            {
                "name": "Kok Ping",
                "type": "thailandaise"
            },
            {
                "name": "Taverna d'Umberto",
                "type": "italienne"
            }
        ];
    }

    getRestaurantsSearch(ev: any) {
        // reset items back to all of the restaurants
        this.initializeRestaurants();

        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the restaurants
        if (val && val.trim() != '') {
            this.restaurants = this.restaurants.filter((restaurant) => {
                return (restaurant.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

    getRestaurantsFilters(): void {

        // reset items back to all of the restaurants
        this.initializeRestaurants();

        // retrieve checked filters
        let filters = this.type;
        let values = [];

        // filter restaurants
        for (var f of filters) {
            // loop through filters and retrieve restaurant entries which match filter type
            let newEntry = this.restaurants.filter((restaurant) => {
                return (restaurant.type.indexOf(f) > -1);
            })
            // store entries
            values = values.concat(newEntry);
        }

        // if the value is an empty array don't filter the restaurants
        if (values.length != 0) {
            this.restaurants = values;
        }
    }
}
