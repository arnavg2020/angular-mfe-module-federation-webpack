import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FileType, MfeUtil } from 'projects/utils/src/public-api';

export const mfe = new MfeUtil();

const routes: Routes = [
  {
    path: 'flights',
	loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule),
  },
  {
    path: '',
	component: await mfe.loadRemoteFile({
	  remoteName: 'home',
	  remoteEntry: `http://localhost:4203/remoteHome.js`,
	  exposedFile: "HomeComponent",
	  exposeFileType: FileType.Component,
	}).then((m) => m.HomeComponent),
  },
  {
    path: 'bookings',
	loadChildren: () => mfe.loadRemoteFile({
	  remoteName: "bookings",
	  remoteEntry: `http://localhost:4205/remoteBookings.js`,
	  exposedFile: "BookingsModule",
	  exposeFileType: FileType.Module
    }).then((m) => m.BookingsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}