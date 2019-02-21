import { Component, OnInit } from '@angular/core';

import { NewsApiService } from '../services/newsapi-service';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit {
  newsapi: NewsApiService;
  data: any;
  articles: Article[] = [];
  query: number = 0;
  search: string = "";
  constructor(private news: NewsApiService, private _route: ActivatedRoute) {
    this.newsapi = news;
    this._route
      .queryParams
      .subscribe(params => {
        console.log(params)
        this.query = params['id'] || 0;
        this.search = params['search'];
        this.getQuery(params['id'], params['search']);
      });
  }
  async getQuery(id: any, search: any) {
    switch (id) {
      case "0": //TOP NEWS IN US
        this.newsapi.getHeadlinesInUS().subscribe(response => {
          this.data = response["articles"];
          this.getArticles()
        });
        break;
      case "1": //TOP NEWS IN WORLD
        this.newsapi.getHeadlinesInWorld().subscribe(response => {
          this.data = response["articles"];
          this.getArticles()
        });
        break;
      case "2": //TOP NEWS IN US
        break;
      case "3": //TOP NEWS IN CHICAGO
        this.newsapi.getArticleByQuery("Chicago").subscribe(response => {
          this.data = response["articles"];
          this.getArticles();
        });
        break;
      case "4": //TOP NEWS IN TECHNOLOGY
        this.newsapi.getArticleByQuery("Technology").subscribe(response => {
          this.data = response["articles"];
          this.getArticles();
        });
        break;
      default:
        console.log("SEARCH QUERY")
        this.newsapi.getArticleByQuery(search).subscribe(response => {
          this.data = response["articles"];
          this.getArticles();
        });
        break;

    }

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
    this.articles = []
    for (var i in this.data) {
      var d = this.data[i]
      var a = this.createArticle(d);
      this.articles.push(a);
    }
  }
}
