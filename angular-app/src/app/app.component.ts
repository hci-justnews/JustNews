import { Component, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { map, take } from 'rxjs/operators';
import { NewsApiService } from './services/newsapi-service';
import { User, UserService } from './services/users-service';
import { useAnimation } from '@angular/animations';

declare var jquery: any;
declare var $: any;
import 'hammerjs';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'JustNews';
  @ViewChild('drawer') drawer: MatDrawer;
  public firstLoad: boolean = true;
  public show: boolean = false;
  
  constructor(private router: Router, private newsapi: NewsApiService, private users: UserService, private ref: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.newsapi.showDrawer.subscribe((value) => {if(this.drawer.opened != value){this.drawer.toggle();}})
    this.newsapi.showNavbar.subscribe((value) => { this.show = value; })

    this.goToLandingPage();
    // this.goToProfile()
    // this.users.loadUsers();
  }

  getTopStories() {
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 0 } })
    this.drawer.toggle();
  }
  getWorldStories() {
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 1 } })
    this.drawer.toggle();
  }
  getCountryStories() {
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 2 } })
    this.drawer.toggle();
  }
  getChicagoStories() {
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 3 } })
    this.drawer.toggle();
  }
  getTechStories() {
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 4 } })
    this.drawer.toggle();
  }
  goToLandingPage() {
    if (this.drawer.opened) {
      this.drawer.toggle();
    }
    // this.newsapi.hideHeader();
    this.router.navigate(['/', 'home']);
  }
  goToProfile() {
    this.newsapi.showHeader();
    // this.newsapi.toggleD();
    this.router.navigate(['/','profile'])
  }
  selectUser(index: number) {
    this.users.setUser(index);
    this.ref.markForCheck();
  }
  addCategory() {
    console.log("HEY")
  }

}
