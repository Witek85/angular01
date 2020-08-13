import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap, mergeAll } from 'rxjs/operators';
import { forkJoin, merge, concat, zip } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() isAuthenticated;
  @Output() menuToggle:EventEmitter<null> = new EventEmitter<null>();
  pageTitle:string = "";
  activeRoute:string = "";
  isSubheaderVisible:boolean = false;

  constructor(private authService:AuthService, private _snackBar: MatSnackBar, private router: Router, private activatedRoute:ActivatedRoute) { }

  private getLatestChild(route) {
    while (route.firstChild) {
        route = route.firstChild;
    }
    return route;
  }

  ngOnInit() {
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
        this.activeRoute = routeEventsResponse['urlAfterRedirects'];
        this.isSubheaderVisible = this.activeRoute === "/";
        this.pageTitle = routeDataResponse['title'] ? routeDataResponse['title'] : 'No title';
      });
  }

  onMenuClick() {
    this.menuToggle.emit();
  }

  onLogout() {
    this.authService.logout();
    this._snackBar.open('Logout successful', 'Close', {
      duration: 2000
    })
  }

}
