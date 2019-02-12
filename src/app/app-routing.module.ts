import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CondominiumComponent } from './admin/condominium/condominium.component';

const routes: Routes = [
  {path: 'condominium', component: CondominiumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
