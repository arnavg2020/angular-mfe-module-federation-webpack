import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { FileType } from 'projects/utils/src/public-api';
import { mfe } from '../../app-routing.module';

@Component({
  selector: 'pmo-mfe-flight-component',
  templateUrl: './mfe-flight-component.component.html',
  styleUrls: ['./mfe-flight-component.component.scss']
})
export class MfeFlightComponentComponent implements OnInit {

  constructor(private viewCRef: ViewContainerRef,
    private componentFR : ComponentFactoryResolver) { }

  async ngOnInit() {
    const FlightComponent = await mfe.loadRemoteFile({
    remoteName: "flights",
    remoteEntry: `http://localhost:4205/remoteFlights.js`,
    exposedFile: "FlightComponent",
    exposeFileType: FileType.Component,
    }).then((m) => m.FlightComponent);

    this.viewCRef.createComponent(
      this.componentFR.resolveComponentFactory(FlightComponent)
    );
  } 

}
