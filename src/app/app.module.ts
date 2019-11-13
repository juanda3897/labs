import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import {MatButtonModule} from '@angular/material'
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import {MatAutocompleteModule, MatInputModule, MatCheckbox, MatCheckboxModule, MatRadioButton, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatFormField, MatFormFieldModule, MatSelectModule, MatSliderModule, MatSlideToggleModule } from '@angular/material';

const MaterialComponents =[
  MatButtonModule,
  MatDatepickerModule, 
  MatNativeDateModule
];

@NgModule({
  
    declarations: [
    AppComponent,
    ButtonComponent,
    DatepickerComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponents,
    MatDatepickerModule,
    MatNativeDateModule,
    
       
  ],

  exports: [ MaterialComponents],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
