import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  opened = false;
  log(state:any) {
    console.log(state)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
