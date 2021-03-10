import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DilogExampleComponent } from '../dilog-example/dilog-example.component';

@Component({
  selector: 'app-dilogbox',
  templateUrl: './dilogbox.component.html',
  styleUrls: ['./dilogbox.component.css']
})
export class DilogboxComponent implements OnInit {


  constructor(public dialog:MatDialog) { }
  openDilog() {
    let dilogRef = this.dialog.open(DilogExampleComponent,{data:{name:'Firoz'}});
    dilogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result:${result}`)
    })
  }
  ngOnInit(): void {
  }

}
