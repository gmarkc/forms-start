import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataDrivenComponent } from './data-driven';
import { TemplateDrivenComponent } from './template-driven';

@NgModule({
  declarations: [
    AppComponent, DataDrivenComponent, TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
