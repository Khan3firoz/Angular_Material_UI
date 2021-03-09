import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtontypeComponent } from './buttontype/buttontype.component';
import { MaterialModule } from './material/material.module';
import { DisplayClaasTextComponent } from './display-claas-text/display-claas-text.component';





@NgModule({
  declarations: [
    AppComponent,
    ButtontypeComponent,
    DisplayClaasTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
