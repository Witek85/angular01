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
  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: L.latLng(46.879966, -121.726909)
  };

  constructor() { }

  ngOnInit() {
  }


}
