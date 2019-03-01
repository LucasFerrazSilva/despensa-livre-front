import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatTableModule, MatCardModule, MatInputModule, MatIconModule, MatSelectModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class MaterialModule { }