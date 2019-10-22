import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { stops } from '../stops';

@Component({
  selector: 'app-stop-list',
  templateUrl: './stop-list.component.html',
  styleUrls: ['./stop-list.component.css']
})
export class StopListComponent implements OnInit {
  stops = stops;

  constructor() { }

  ngOnInit() {
  }

}