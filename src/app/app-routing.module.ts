import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FileType, MfeUtil } from 'projects/utils/src/public-api';


export const mef = new MfeUtil();

const routes: Routes = [
  {
    path: '',
	loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'flights',
	loadChildren: () => mef.loadRemoteFile({
	  remoteName: "flights",
	  remoteEntry: `http://localhost:4204/remoteFlights.js`,
	  exposedFile: "FlightsModule",
	  exposeFileType: FileType.Module
    }).then((m) => m.FlightsModule),
  },
  {
    path: 'bookings',
	loadChildren: () => mef.loadRemoteFile({
	  remoteName: "bookings",
	  remoteEntry: `http://localhost:4205/remoteBookings.js`,
	  exposedFile: "BookingsModule",
	  exposeFileType: FileType.Module
	}).then((m) => m.BookingsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
} 