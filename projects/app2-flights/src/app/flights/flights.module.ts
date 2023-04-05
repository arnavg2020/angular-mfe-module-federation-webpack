import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlightsComponent} from "./flights.component";
import {RouterModule, Routes} from "@angular/router";
import { MfeFlightComponentComponent } from './mfe-flight-component/mfe-flight-component.component';

const routes: Routes = [
  {
    path: 'flights',
  },
  {
    path: ':slug/flights',
    component: MfeFlightComponentComponent
  }
]

@NgModule({
  declarations: [
    FlightsComponent,
    MfeFlightComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FlightsModule { }
