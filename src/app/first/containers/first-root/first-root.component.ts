import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-first-root',
  templateUrl: './first-root.component.html',
  styleUrls: ['./first-root.component.css']
})
export class FirstRootComponent implements OnInit {

  constructor(public dialog:MatDialog, private dialogService: DialogService) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialogService.openDialog();
  }

}
