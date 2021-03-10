import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dilog-example',
  templateUrl: './dilog-example.component.html',
  styleUrls: ['./dilog-example.component.css']
})
export class DilogExampleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
