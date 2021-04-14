import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileInputComponent } from './file-input/file-input.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayDataComponent } from './display-data/display-data.component';

@NgModule({
  declarations: [
    AppComponent,
    FileInputComponent,
    DashboardComponent,
    DisplayDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
