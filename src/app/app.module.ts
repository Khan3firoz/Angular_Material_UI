import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtontypeComponent } from './buttontype/buttontype.component';
import { MaterialModule } from './material/material.module';
import { DisplayClaasTextComponent } from './display-claas-text/display-claas-text.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ExpansionPanelsComponent } from './expansion-panels/expansion-panels.component';
import { CardsComponent } from './cards/cards.component';
import { TabsComponent } from './tabs/tabs.component';





@NgModule({
  declarations: [
    AppComponent,
    ButtontypeComponent,
    DisplayClaasTextComponent,
    BadgesComponent,
    ProgressBarComponent,
    NavbarComponent,
    MenuComponent,
    ListComponent,
    GridListComponent,
    ExpansionPanelsComponent,
    CardsComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
