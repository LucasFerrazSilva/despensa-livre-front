import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CondominiumComponent } from './admin/condominium/condominium.component';
import { CondominiumFormComponent } from './admin/condominium/condominium-form/condominium-form.component';
import { UserComponent } from './admin/user/user.component';
import { UserFormComponent } from './admin/user/user-form/user-form.component';

const routes: Routes = [
  {path: 'condominium', component: CondominiumComponent},
  {path: 'condominium/form', component: CondominiumFormComponent},
  {path: 'condominium/form/:id', component: CondominiumFormComponent},
  
  {path: 'user', component: UserComponent},
  {path: 'user/form', component: UserFormComponent},
  {path: 'user/form/:id', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
