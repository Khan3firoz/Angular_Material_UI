import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-piker',
  templateUrl: './date-piker.component.html',
  styleUrls: ['./date-piker.component.css']
})
export class DatePikerComponent implements OnInit {
  minDate = new Date();
  date: any;
  maxDate = new Date(2022, 3, 10);
  // dateFilter = date => {
  //   const day = date.getDay();
  //   return day != 0 && day != 6;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
