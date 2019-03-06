import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from '../newspage/newspage.component';
import { getOrCreateInjectable } from '@angular/core/src/render3/di';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'article',
  templateUrl: './articlepage.component.html',
  styleUrls: ['./articlepage.component.css']
})
export class ArticlepageComponent implements OnInit {
  article: Article;

  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor(private _route: ActivatedRoute) {

    this._route
      .queryParams
      .subscribe(params => {
        this.article = {
          content: params['content'],
          title: params['title'],
          author: params['author'],
          publishedAt: params['publishedAt'],
          source: params['source'],
          description: params['description'],
          url: params['url'],
          image: params['image'],
          bias: params['bias']
        };
        
      });
  }

  ngOnInit() {
  }

}
