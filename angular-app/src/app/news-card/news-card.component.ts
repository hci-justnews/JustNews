import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../newspage/newspage.component';
import { NewsApiService } from '../services/newsapi-service';
import { Router } from '@angular/router';
import { ArticlepageComponent } from '../articlepage/articlepage.component';
import { SummarizerService } from '../services/summarizer.service';
import { MatDialog } from '@angular/material';
import { SummarydialogComponent } from '../summarydialog/summarydialog.component';

@Component({
  selector: 'news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Input() article: Article;
  public maskAll: boolean;
  public maskThis: boolean;
  public maskCurrent: boolean = true;
  public maskButton: string = "Mask Source";
  public collapse: boolean = false;
  public summary = [];
  constructor(private newsapi: NewsApiService, private router: Router, private summarizer: SummarizerService, private dialog: MatDialog) { }

  ngOnInit() {
    this.newsapi.mask.subscribe((value) => { this.maskAll = value; this.maskThis = value; this.checkMask(); })
    // this.summarizer.getSummary(this.article.url).subscribe((value)=>console.log(value));
  }
  buildSummaryDialog() {
    const dialogRef = this.dialog.open(SummarydialogComponent, {
      width: '600px',
      minHeight: '600px',
      data: { url: this.article.url, img: this.article.image, title: this.article.title }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  checkMask() {
    this.maskCurrent = this.maskAll && this.maskThis;
    this.maskButton = this.maskThis ? "Unmask Source" : "Mask Source"
  }

  getTimeString() {
    var hour = this.article.publishedAt.getHours();
    var tod = "AM"
    var minutes = this.article.publishedAt.getMinutes()
    var minString = minutes.toString().padEnd(2, "0")
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
    this.router.navigate(['/', 'newspage'], { queryParams: { search: search } })

    // console.log(this.news)
  }

  goToArticle() {
    this.router.navigate(['/', 'article'], {
      queryParams: {
        author: this.article.author,
        title: this.article.title,
        description: this.article.description,
        url: this.article.url,
        image: this.article.image,
        publishedAt: this.article.publishedAt,
        content: this.article.content,
        source: this.article.source,
        bias: this.article.bias,
        maskThis: this.maskThis,
        maskAll: this.maskAll
      }
    })
  }
  removeMask() {
    this.maskThis = false;

  }
  addMask() {
    this.maskThis = true;
  }

  toggleMask() {
    this.maskThis = !this.maskThis;
    this.maskButton = this.maskThis ? "Unmask Source" : "Mask Source"
    this.checkMask();
  }

  toggleCollapse() {
    this.collapse = !this.collapse;
  }

}
