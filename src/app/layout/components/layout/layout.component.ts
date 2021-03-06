import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDrawer } from '@angular/material';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap, mergeAll } from 'rxjs/operators';
import { zip } from 'rxjs';
import { Subheader } from '../../interfaces/subheader';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  private userSubscription: Subscription;
  header:string = "";
  subheader:Subheader = {isVisible:false};
  activeRoute:string = "";
  @ViewChild('sidenav', {static: true}) private sidenavRef: MatDrawer;

  constructor(private authService:AuthService, private router: Router, private activatedRoute:ActivatedRoute) { }

  private getLatestChild(route) {
    while (route.firstChild) {
        route = route.firstChild;
    }
    return route;
  }

  ngOnInit() {
    console.log(this.authService.user);
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });

    const routeEvents = this.router.events.pipe(filter(event => event instanceof NavigationEnd));
    const routeData = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => this.getLatestChild(route)),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
    )

    zip(routeEvents, routeData).subscribe(
      ([routeEventsResponse, routeDataResponse]) => {
        console.log(routeDataResponse);
        this.activeRoute = routeEventsResponse['urlAfterRedirects'];
        this.header = routeDataResponse['header'] ? routeDataResponse['header'] : 'No header';
        this.subheader = {
          isVisible: this.activeRoute === "/",
          text: routeDataResponse['subheader'] ? routeDataResponse['subheader'] : ''
        }
      });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onToggle() {
    console.log('toggle', this.sidenavRef);
    this.sidenavRef.toggle();
  }

}
