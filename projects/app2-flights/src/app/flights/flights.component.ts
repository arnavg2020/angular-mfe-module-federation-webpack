import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmo-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.less']
})
export class FlightsComponent implements OnInit {

  selectedTab = 0;
  orderComplete = false;

  constructor() { }

  ngOnInit(): void {
  }

}
