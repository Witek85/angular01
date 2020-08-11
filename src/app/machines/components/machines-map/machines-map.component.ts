import { Component, OnInit, AfterViewInit, AfterContentInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { MachinesService } from 'src/app/services/machines.service';
import { Subscription, Observable, of } from 'rxjs';
import { Machine } from '../../interfaces/machine';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-machines-map',
  templateUrl: './machines-map.component.html',
  styleUrls: ['./machines-map.component.css']
})
export class MachinesMapComponent implements OnInit {

  @ViewChild("leafletRef", {static: false}) leafletReference: ElementRef;

  machines$: Observable<Machine[]>;
  map: L.Map;

  icon = L.icon({
    iconSize: [ 25, 41 ],
    iconAnchor: [ 13, 41 ],
    iconUrl: 'assets/marker-icon.png',
    shadowUrl: 'assets/marker-shadow.png'
  })

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

  machineSelection:Subscription;

  constructor(private machinesService: MachinesService, private route: ActivatedRoute) { }

  createMarker(marker) {
    const myMarker = L.marker([ marker.lat, marker.lng ], {
      icon: this.icon
    });

    myMarker.addTo(this.markersLevel);
  }

  ngOnInit() {
    this.route.data.subscribe(
			(data: Machine[]) => {
        data['machines'].map(marker => {
          this.createMarker(marker);
        })
        this.machines$ = of(data['machines']); 
			}
    );
    
    this.machineSelection = this.machinesService.selectedMachine.subscribe(machine => {
      console.log('selected machine', machine)
      this.panToMachine(machine);
    })
  }

  ngAfterViewInit() {
    console.log("client height: " + this.leafletReference.nativeElement.clientHeight);
    console.log("client width: "+ this.leafletReference.nativeElement.clientWidth);
  }

  ngOnDestroy() {
    this.machineSelection.unsubscribe();
  }

  onMapReady(map: L.Map) {
    console.log('TODO fitBounds');
    this.map = map;
  }

  panToMachine(machine: Machine) {
    this.map.panTo(new L.LatLng(machine.lat, machine.lng));
  }

}
