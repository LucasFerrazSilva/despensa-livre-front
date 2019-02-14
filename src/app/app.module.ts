import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CondominiumComponent } from './admin/condominium/condominium.component';
import { MaterialModule } from './config/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CondominiumFormComponent } from './admin/condominium/condominium-form/condominium-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CondominiumComponent,
    CondominiumFormComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
