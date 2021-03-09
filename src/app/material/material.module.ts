import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';





const materialComponent = [
  MatButtonModule,
  MatDividerModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule
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
