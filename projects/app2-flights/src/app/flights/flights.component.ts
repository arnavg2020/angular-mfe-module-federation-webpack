import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmo-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class FlightsComponent implements OnInit {

  selectedTab = 0;
  orderComplete = false;

  constructor() { }

  ngOnInit(): void {
  }

}
