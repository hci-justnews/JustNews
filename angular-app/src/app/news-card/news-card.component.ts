import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../newspage/newspage.component';
import { NewsApiService } from '../services/newsapi-service';
import { Router } from '@angular/router';

@Component({
  selector: 'news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Input() article: Article;

  constructor(private newsapi: NewsApiService, private router:Router) { }

  ngOnInit() {
  }

  getTimeString() {
    var hour = this.article.publishedAt.getHours();
    var tod = "AM"
    var minutes = this.article.publishedAt.getMinutes()
    var minString = minutes.toString().padEnd(2,"0")
    if (hour > 12) {
      tod = "PM"
    }
    if (hour == 0 || 12) {
      hour = 12;
    }
    else {
      hour = hour % 12;
    }
    return hour + ":" + minString + tod + " " + (this.article.publishedAt.getMonth() + 1) + "/" + this.article.publishedAt.getDate() + "/" + this.article.publishedAt.getFullYear();
  }
  searchNews() {
    var search = document.getElementById("search").nodeValue;
    this.newsapi.showHeader();
    this.router.navigate(['/', 'newspage'], { queryParams: {search:search } })

    // console.log(this.news)
  }
}
