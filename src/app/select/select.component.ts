import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  selectedValue: string | undefined;
  selectedValue2: string | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
