import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() isAuthenticated;
  @Output() menuToggle:EventEmitter<null> = new EventEmitter<null>();
  activeRoute:string = "";
  isSubheaderVisible:boolean = false;

  constructor(private authService:AuthService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(event => {
      this.activeRoute = event['urlAfterRedirects'];
      this.isSubheaderVisible = this.activeRoute === "/";
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
