import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsComponent } from './bookings.component';
import {RouterModule, Routes} from "@angular/router";
import {FlightsComponent} from "../flights/flights.component";

const routes: Routes = [
  {
    path: '',
    component: BookingsComponent
  },
  {
    path: ':slug/order',
    component: FlightsComponent,
  }
];

@NgModule({
  declarations: [
    BookingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookingsModule { }
