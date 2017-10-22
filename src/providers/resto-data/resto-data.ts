import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestoDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestoDataProvider {

  constructor(public http: Http) {
      this.http = http;
  }

  public data: any;

    getData() {
        this.http.get("assets/data/data.json")
            .subscribe(res => {
                this.data = res.json();
                console.log(this.data);
            }, error => {
                console.log(error);
            });
    }

}
