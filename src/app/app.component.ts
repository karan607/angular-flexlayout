import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-flexlayout';
  opened = false;

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) { }

  openSnackBar(message, action) {
    this.snackBar.open(message, action);
  }

  openDialog() {
    this.dialog.open(DialogExampleComponent);
  }

}
