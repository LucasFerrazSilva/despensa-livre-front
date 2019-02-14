import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CondominiumComponent } from './admin/condominium/condominium.component';
import { CondominiumFormComponent } from './admin/condominium/condominium-form/condominium-form.component';

const routes: Routes = [
  {path: 'condominium', component: CondominiumComponent},
  {path: 'condominium/form', component: CondominiumFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
