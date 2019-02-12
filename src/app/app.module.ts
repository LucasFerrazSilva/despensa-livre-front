import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CondominiumComponent } from './admin/condominium/condominium.component';
import { MaterialModule } from './config/material.module';

@NgModule({
  declarations: [
    AppComponent,
    CondominiumComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
