import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ObjectTimeComponent } from './object-time/object-time.component';
import { NumberTimeComponent } from './number-time/number-time.component';
import { TestAccuracyComponent } from './test-accuracy/test-accuracy.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectTimeComponent,
    NumberTimeComponent,
    TestAccuracyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
