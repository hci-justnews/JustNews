import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import { NewspageComponent } from './newspage/newspage.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'newspage', component: NewspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent,NewspageComponent]