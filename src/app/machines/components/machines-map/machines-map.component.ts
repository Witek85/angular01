import { Component, OnInit, AfterViewInit, AfterContentInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import { MachinesService } from 'src/app/services/machines.service';
import { Subscription } from 'rxjs';

const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

@Component({
  selector: 'app-machines-map',
  templateUrl: './machines-map.component.html',
  styleUrls: ['./machines-map.component.css']
})
export class MachinesMapComponent implements OnInit, AfterViewInit {
  private map;
  navigateSubscription: Subscription;
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
  }

  constructor() { }

  ngOnInit() {
  }

  // invalidateSize 
  // https://stackoverflow.com/questions/35527456/angular-window-resize-event

  ngAfterViewInit(): void {
    this.initMap();
    tiles.addTo(this.map);
  }

}
