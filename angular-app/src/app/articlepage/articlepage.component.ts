import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../newspage/newspage.component';
import {NewsApiService} from "../services/newsapi-service";
@Component({
  selector: 'article',
  templateUrl: './articlepage.component.html',
  styleUrls: ['./articlepage.component.css']
})
export class ArticlepageComponent implements OnInit {
  public article: Article;
  public descriptionFiller: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  public maskAll: boolean;
  public maskThis: boolean;
  public maskButton: string = "Mask Source";

  constructor(private _route: ActivatedRoute,private newsapi: NewsApiService) {

    this._route
      .queryParams
      .subscribe(params => {
        this.article = {
          content: params['content'],
          title: params['title'],
          author: params['author'],
          publishedAt: new Date(params['publishedAt']),
          source: params['source'],
          description: params['description'],
          url: params['url'],
          image: params['image'],
          bias: params['bias']
        };
        this.maskThis = params["maskThis"];
        this.maskAll = params["maskAll"];
      });
  }

  ngOnInit() {
    this.newsapi.mask.subscribe((value) => { this.maskAll = value; this.maskThis = value; })
  }

  getTimeString() {
    var hour = this.article.publishedAt.getHours();
    var tod = "AM";
    var minutes = this.article.publishedAt.getMinutes();
    var minString = minutes.toString().padEnd(2, "0");
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

  toggleMask() {
    this.maskThis = !this.maskThis
    this.maskButton = this.maskThis ? "Unmask Source" : "Mask Source"
  }

  chooseLeft() {

  }

  chooseRight() {

  }

  chooseNeutral() {

  }

}
