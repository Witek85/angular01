import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private authService:AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
    this._snackBar.open('Logout successful', 'Close', {
      duration: 2000
    })
  }

}
