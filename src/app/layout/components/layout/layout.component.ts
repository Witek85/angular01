import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar, MatDrawer } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  private userSubscription: Subscription;
  @ViewChild('sidenav', {static: true}) private sidenavRef: MatDrawer;

  constructor(private authService:AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log(this.authService.user);
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
    this._snackBar.open('Logout successful', 'Close', {
      duration: 2000
    })
  }

  onToggle() {
    console.log('toggle', this.sidenavRef);
    this.sidenavRef.toggle();
  }

}
