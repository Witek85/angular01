import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-first-dialog',
  templateUrl: './first-dialog.component.html',
  styleUrls: ['./first-dialog.component.css']
})
export class FirstDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<FirstDialogComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
