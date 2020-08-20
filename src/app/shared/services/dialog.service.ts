import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FirstDialogComponent } from '../components/first-dialog/first-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(FirstDialogComponent, {
      width: '300px',
      data: ''
    });
  };
}
