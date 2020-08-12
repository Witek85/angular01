import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService:AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onLogin(role:string) {
    console.log('role', role);
    this.authService.login({role});
    this._snackBar.open('Login successful', 'Close', {
      duration: 2000
    })
  }

}
