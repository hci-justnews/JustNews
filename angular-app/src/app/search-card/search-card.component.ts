import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormsModule } from '@angular/forms';
import { NewsApiService } from '../services/newsapi-service';
import { Router } from '@angular/router';

@Component({
  selector: 'search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {
  public s: string = ""

  constructor(private router: Router, private newsapi: NewsApiService) {

  }
  ngOnInit() {
    var input = document.getElementById("search-bar-input");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search-button").click();
      }
    });
  }
  searchTopic() {
    var search = (<HTMLInputElement>document.getElementById("search-bar-input")).value;
    this.router.navigate(['/', 'newspage'], { queryParams: { search: search } })
  }

}
