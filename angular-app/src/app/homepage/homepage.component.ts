import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
declare var $: any;
export interface Article {
  author: string,
  title: string,
  description: string,
  url: string,
  image: string,
  publishedAt: Date,
  content: string,
  source: string
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  data: any;
  articles: Article[] = [];
  constructor() {
    var that = this;
    var data = $.getJSON("./assets/news-data.json", function (json) {
      that.data = json['articles']
    });
    data.complete(() => this.getArticles());
  }

  async ngOnInit() {
  }
  createArticle(d: any) {
    return {
      author: d['author'],
      title: d['title'],
      description: d['description'],
      url: d['url'],
      image: d['urlToImage'],
      publishedAt: new Date(d['publishedAt']),
      content: d['content'],
      source: d['source']['name']
    }
  }
  getArticles() {
    for (var i in this.data) {
      var d = this.data[i]
      // console.log(this.data[i]);
      var a = this.createArticle(d);
      this.articles.push(a);
    }
    console.log(this.articles);
  }

}
