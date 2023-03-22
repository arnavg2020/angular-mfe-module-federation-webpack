import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmo-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.less']
})
export class BookingsComponent implements OnInit {

  showItems = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showItems = !this.showItems;
    }, 1000);
  }

}
