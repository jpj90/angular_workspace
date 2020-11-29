import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyLibComponent } from 'my-lib'
import { RegularComponentComponent } from './components/regular-component/regular-component.component';

const routes: Routes = [
  { path: "libcomponent", component: MyLibComponent },
  { path: "regularcomponent", component: RegularComponentComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
