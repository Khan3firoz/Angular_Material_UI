import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  openSnacBar(message: string,action: string | undefined) {
    let snacBarRef = this.snackBar.open(message, action,{duration:2000})
    snacBarRef.afterDismissed().subscribe(() => {
      console.log('The snacBar was dissmis')
    });
    snacBarRef.onAction().subscribe(() => {
      console.log('snacbar acion was triggered')
    });
  }
  openCustomSnackBar() {
    this.snackBar.openFromComponent(CustomSnacBarComponent,{duration:2000})
  }

  ngOnInit(): void {
  }

}
@Component({
  selector: 'custom-snackbar',
  template:`<span style="color:orange"> custom snackbar</span>`
})
export class CustomSnacBarComponent  { }
