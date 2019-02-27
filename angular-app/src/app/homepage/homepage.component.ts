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
    this.newsapi.hideHeader()
    this.newsapi.toggleD();
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
    this.newsapi.toggleD();
    this.newsapi.showHeader();
    this.router.navigate(['/', 'newspage'], { queryParams: { search: this.search } })
  }
  searchZion() {
    this.newsapi.showHeader();
    this.router.navigate(['/', 'newspage'], { queryParams: { search: "Zion Williamson" } })
  }
  searchWorld() {
    this.newsapi.showHeader();
    this.router.navigate(['/', 'newspage'], { queryParams: { search: "World" } })
  }
  searchTop() {
    this.newsapi.showHeader();
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 0 } });

  }
  searchChicago() {
    this.newsapi.showHeader();
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 3 } })
  }

}
