import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NewspageComponent } from './newspage/newspage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'newspage', component: NewspageComponent },
  { path: 'profile', component: ProfilepageComponent }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent, NewspageComponent, ProfilepageComponent]

