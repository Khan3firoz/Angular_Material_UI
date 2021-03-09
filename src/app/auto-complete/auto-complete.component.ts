import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import{map, startWith}from 'rxjs/operators'


@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

  options = ['Angular', 'React', 'NodeJs', 'Vue'];
  objectOption = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'React' },
    { name: 'Vue' },
  ];
  myControl = new FormControl();

  filteredOptions:Observable<string[]> | undefined
  displayFn(subject:any) {
    return subject.name
  }
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(vlaue=>this._filter(vlaue))
    )
  }
  private _filter(value: string): string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    )
  }

}
