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
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ExpansionPanelsComponent } from './expansion-panels/expansion-panels.component';
import { CardsComponent } from './cards/cards.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CheckBoxradioButtonComponent } from './check-boxradio-button/check-boxradio-button.component';
import { DatePikerComponent } from './date-piker/date-piker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { CustomSnacBarComponent, SnackbarComponent } from './snackbar/snackbar.component';
import { DilogboxComponent } from './dilogbox/dilogbox.component';
import { DilogExampleComponent } from './dilog-example/dilog-example.component';





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
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutoCompleteComponent,
    CheckBoxradioButtonComponent,
    DatePikerComponent,
    TooltipComponent,
    SnackbarComponent,
    DilogboxComponent,
    DilogExampleComponent,
  ],
  entryComponents:[CustomSnacBarComponent,DilogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
