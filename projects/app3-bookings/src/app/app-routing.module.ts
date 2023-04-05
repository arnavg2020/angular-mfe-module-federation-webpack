import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FileType, MfeUtil } from 'projects/utils/src/public-api';

export const mfe = new MfeUtil();

const routes: Routes = [
  {
    path: '',
	component: await new MfeUtil().loadRemoteFile({
	  remoteName: "home",
	  remoteEntry: `http://localhost:4203/remoteHome.js`,
	  exposedFile: "HomeComponent",
	  exposeFileType: FileType.Component,
    }).then((m) => m.HomeComponent),
  },
  {
    path: 'flights',
	loadChildren: () => new MfeUtil().loadRemoteFile({
	  remoteName: "flights",
	  remoteEntry: `http://localhost:4204/remoteFlights.js`,
	  exposedFile: "FlightsModule",
	  exposeFileType: FileType.Module
	}).then((m) => m.FlightsModule),
  },
  {
    path: 'order',
	loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}