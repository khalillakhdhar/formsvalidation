import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateformComponent } from './templateform/templateform.component';

const routes: Routes = [
  {path:'',component:ReactiveComponent},
  {path:'template',component:TemplateformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
