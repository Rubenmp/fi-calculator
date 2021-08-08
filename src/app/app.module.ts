import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FiInputComponent } from './fi-input/fi-input.component';
import { FiOutputComponent } from './fi-output/fi-output.component';

@NgModule({
  declarations: [
    AppComponent,
    FiInputComponent,
    FiOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
