import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  url = `https://data.smartdublin.ie/cgi-bin/rtpi/timetableinformation?type=week&stopid=5165&routeid=33b&format=json`;
  items = [];

  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);

      for (let key in data)
        if (data.hasOwnProperty(key))
          this.items.push(data[key]);
    });
}
}