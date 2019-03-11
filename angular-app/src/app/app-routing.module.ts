import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NewspageComponent } from './newspage/newspage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { ArticlepageComponent } from './articlepage/articlepage.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'newspage', component: NewspageComponent },
  { path: 'profile', component: ProfilepageComponent }, 
  { path: 'article', component: ArticlepageComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent, NewspageComponent, ProfilepageComponent, ArticlepageComponent]

