import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CondominiumComponent } from './admin/condominium/condominium.component';
import { MaterialModule } from './config/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CondominiumFormComponent } from './admin/condominium/condominium-form/condominium-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './admin/user/user.component';
import { UserFormComponent } from './admin/user/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CondominiumComponent,
    CondominiumFormComponent,
    UserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
