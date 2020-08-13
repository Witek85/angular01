import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatSnackBar } from '@angular/material';
import { Subheader } from '../../interfaces/subheader';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() isAuthenticated;
  @Input() isSubheaderVisible:boolean;
  @Input() subheader:Subheader = {isVisible:false};
  @Output() menuToggle:EventEmitter<null> = new EventEmitter<null>();

  constructor(private authService:AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit() {}

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
