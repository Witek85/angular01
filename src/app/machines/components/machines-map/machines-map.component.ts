import { Component, OnInit, AfterViewInit, AfterContentInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import { MachinesService } from 'src/app/services/machines.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-machines-map',
  templateUrl: './machines-map.component.html',
  styleUrls: ['./machines-map.component.css']
})
export class MachinesMapComponent implements OnInit {

  icon = L.icon({
    iconSize: [ 25, 41 ],
    iconAnchor: [ 13, 41 ],
    iconUrl: 'assets/marker-icon.png',
    shadowUrl: 'assets/marker-shadow.png'
  })

  marker1 = L.marker([ 52.2303201, 20.9905102 ], {
    icon: this.icon
  });

  marker2 = L.marker([ 52.1945202,20.9955103 ], {
    icon: this.icon
  });

  marker3 = L.marker([ 52.2355202,20.9505103 ], {
    icon: this.icon
  });

  markersLevel: L.LayerGroup = new L.LayerGroup();

  layerGroup: L.LayerGroup[] = [
    this.markersLevel
  ]

  mapLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' });

  options = {
    layers: [
      this.mapLayer
    ],
    zoom: 11,
    center: L.latLng(52.2303201, 20.9905102)
  };

  constructor() { }

  ngOnInit() {
    this.marker1.addTo(this.markersLevel);
    this.marker2.addTo(this.markersLevel);
    this.marker3.addTo(this.markersLevel);

  }


}
