import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsComponent } from './bookings.component';
import {RouterModule, Routes} from "@angular/router";
import {FlightsComponent} from "../../../../app2-flights/src/app/flights/flights.component";

const routes: Routes = [
  {
    path: '',
    component: BookingsComponent
  },
  {
    path: ':slug/flights',
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
