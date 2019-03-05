import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material';
import { Observable } from 'rxjs/internal/Observable';
import { map, take } from 'rxjs/operators';
import { NewsApiService } from './services/newsapi-service';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JustNews';
  @ViewChild('drawer') drawer: MatDrawer;
  show: boolean = false;               // {1}
  constructor(private router: Router, private newsapi: NewsApiService) {
  }

  ngOnInit() {
    this.newsapi.showNavbar.subscribe((value) => this.show = value)
    this.goToLandingPage();
  }

  getTopStories() {
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 0 } })
  }
  getWorldStories() {
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 1 } })
  }
  getCountryStories() {
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 2 } })
  }
  getChicagoStories() {
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 3 } })
  }
  getTechStories() {
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 4 } })
  }
  goToLandingPage() {
    if (this.drawer.opened){
      this.drawer.toggle();
    }
    this.newsapi.hideHeader();
    this.router.navigate(['/', 'home']);
  }

  addCategory() {
    console.log("HEY")
  }

}
