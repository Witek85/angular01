import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
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

  constructor(private authService:AuthService) { }

  ngOnInit() {
    console.log(this.authService.user);
    this.userSubscription = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
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
