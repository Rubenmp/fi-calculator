import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FiInputComponent } from './fi-input/fi-input.component';
import { FiOutputComponent } from './fi-output/fi-output.component';
import { FiCalculatorComponent } from './fi-calculator/fi-calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FiInputComponent,
    FiOutputComponent,
    FiCalculatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
