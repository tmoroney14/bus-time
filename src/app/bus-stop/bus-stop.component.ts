import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Stops } from './stops';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-bus-stop',
  templateUrl: './bus-stop.component.html',
  styleUrls: ['./bus-stop.component.css']
})
export class BusStopComponent {

  readonly ROOT_URL =  `https://data.smartdublin.ie/cgi-bin/rtpi/timetableinformation?type=week&stopid=5165&routeid=33b&format=json`;
  posts: Observable<any>;

  constructor(private http: HttpClient) {}
  
  getPosts() {
    let params = new HttpParams().set('stopId', '3720');

    this.posts = this.http.get(this.ROOT_URL + '/posts', { params })    
  }

  ngOnInit() {
  }
}