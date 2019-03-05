import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from '../services/newsapi-service';
import { MatDrawer } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  search: string = "Evanston";
  constructor(private newsapi: NewsApiService, private router: Router) {
  }
  ngOnInit(): void {
    this.newsapi.hideHeader();
    this.newsapi.closeDrawer();
    var that = this;
    $('#searchform').on('keypress', function (e) {
      var keyCode = e.keyCode || e.which;
      if (keyCode === 13) {
        e.preventDefault();
        that.searchQuery();
        // return false;
      }
    });
    document.getElementById('search').addEventListener('input', function (evt) {
      that.search = (<HTMLInputElement>document.getElementById('search')).value;
    });

  }
  searchQuery() {
    this.newsapi.openDrawer();
    this.newsapi.showHeader();
    this.router.navigate(['/', 'newspage'], { queryParams: { search: this.search } })
  }
  searchCarnival() {
    this.newsapi.openDrawer();
    this.newsapi.showHeader();
    this.router.navigate(['/', 'newspage'], { queryParams: { search: "Carnival" } })
  }
  searchAlabama() {
    this.newsapi.openDrawer();
    this.newsapi.showHeader();
    this.router.navigate(['/', 'newspage'], { queryParams: { search: "Alabama Tornadoes" } })
  }
  searchTop() {
    this.newsapi.openDrawer();
    this.newsapi.showHeader();
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 0 } });

  }
  searchBrexit() {
    this.newsapi.showHeader();
    this.router.navigate(['/', 'newspage'], { queryParams: { search: "Brexit" } })
  }

}
