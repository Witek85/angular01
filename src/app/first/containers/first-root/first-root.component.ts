import { Component, OnInit } from '@angular/core';
import { FirstDialogComponent } from '../../components/first-dialog/first-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-first-root',
  templateUrl: './first-root.component.html',
  styleUrls: ['./first-root.component.css']
})
export class FirstRootComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(FirstDialogComponent)
  }

}
