import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';



const materialComponent = [
  MatButtonModule,
  MatDividerModule,
  MatButtonToggleModule
]

@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    materialComponent

  ],
  exports: [
    materialComponent
  ]
})
export class MaterialModule { }
