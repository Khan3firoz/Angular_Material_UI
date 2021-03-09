import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  showSpinner = false

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner=false
    },3000)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
