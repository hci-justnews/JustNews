import {Component, OnInit} from "@angular/core";


import {NewsApiService} from "../services/newsapi-service";
import {ActivatedRoute} from "@angular/router";

import * as bias from "./bias.json";

export interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: Date;
  content: string;
  source: string;
  bias: string;
}

@Component({
  selector: "newspage",
  templateUrl: "./newspage.component.html",
  styleUrls: ["./newspage.component.css"]
})
export class NewspageComponent implements OnInit {
  newsapi: NewsApiService;
  data: any;
  articles: Article[] = [];
  query: number = 0;
  search: string = "";
  maskAll: boolean = false;

  constructor(private news: NewsApiService, private _route: ActivatedRoute) {
    this.newsapi = news;
    this._route.queryParams.subscribe(params => {
      this.query = params["id"] || 0;
      this.search = params["search"];
      this.getQuery(params["id"], params["search"]);
    });
  }

  async getQuery(id: any, search: any) {
    switch (id) {
      case "0": //TOP NEWS IN US
        this.newsapi.getHeadlinesInUS().subscribe(response => {
          this.data = response["articles"];
          this.getArticles();
        });
        break;
      case "1": //TOP NEWS IN WORLD
        this.newsapi.getArticleByQuery("World News").subscribe(response => {
          this.data = response["articles"];
          this.getArticles();
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
        console.log("SEARCH QUERY");
        this.newsapi.getArticleByQuery(search).subscribe(response => {
          this.data = response["articles"];
          this.getArticles();
        });
        break;
    }
  }

  ngOnInit() {
    this.newsapi.showNavbar.subscribe(value => {
      this.maskAll = value;
    });
  }

  createArticle(d: any) {
    var bias_mode = "neutral";
    if (bias["left"].includes(d["source"]["name"])) {
      bias_mode = "left"
    } else if (bias["right"].includes(d["source"]["name"])) {
      bias_mode = "right"
    }
    var content = d["content"];
    if (content != null && content.endsWith("]")) {
      content = String(content)
      content = content.substring(0, content.lentgh - 8) + " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nisi quis eleifend quam adipiscing. Facilisis sed odio morbi quis commodo odio aenean sed. Amet facilisis magna etiam tempor orci eu lobortis. Molestie nunc non blandit massa enim nec. Massa enim nec dui nunc mattis. Enim ut sem viverra aliquet eget sit amet tellus. Mauris a diam maecenas sed enim ut. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Orci eu lobortis elementum nibh tellus. In nulla posuere sollicitudin aliquam ultrices sagittis orci.\n" +
        "\n" +
        "Sit amet commodo nulla facilisi nullam vehicula ipsum. A scelerisque purus semper eget duis at tellus at. Viverra aliquet eget sit amet. Justo nec ultrices dui sapien eget mi proin sed. Tempus iaculis urna id volutpat lacus laoreet. Cras tincidunt lobortis feugiat vivamus at. Elementum curabitur vitae nunc sed velit dignissim. Purus semper eget duis at tellus at urna condimentum. Pellentesque adipiscing commodo elit at. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Eu consequat ac felis donec et. Scelerisque in dictum non consectetur a. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Commodo nulla facilisi nullam vehicula ipsum. Suspendisse sed nisi lacus sed viverra.\n" +
        "\n";
    } else {
      content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id neque aliquam vestibulum morbi blandit. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Nisi quis eleifend quam adipiscing. Facilisis sed odio morbi quis commodo odio aenean sed. Amet facilisis magna etiam tempor orci eu lobortis. Molestie nunc non blandit massa enim nec. Massa enim nec dui nunc mattis. Enim ut sem viverra aliquet eget sit amet tellus. Mauris a diam maecenas sed enim ut. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Orci eu lobortis elementum nibh tellus. In nulla posuere sollicitudin aliquam ultrices sagittis orci.\n" +
        "\n" +
        "Sit amet commodo nulla facilisi nullam vehicula ipsum. A scelerisque purus semper eget duis at tellus at. Viverra aliquet eget sit amet. Justo nec ultrices dui sapien eget mi proin sed. Tempus iaculis urna id volutpat lacus laoreet. Cras tincidunt lobortis feugiat vivamus at. Elementum curabitur vitae nunc sed velit dignissim. Purus semper eget duis at tellus at urna condimentum. Pellentesque adipiscing commodo elit at. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Eu consequat ac felis donec et. Scelerisque in dictum non consectetur a. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Commodo nulla facilisi nullam vehicula ipsum. Suspendisse sed nisi lacus sed viverra.\n" +
        "\n" +
        "Quis lectus nulla at volutpat diam ut venenatis tellus. Enim ut sem viverra aliquet eget sit amet. Rhoncus aenean vel elit scelerisque mauris pellentesque. Amet justo donec enim diam vulputate ut. Consectetur adipiscing elit ut aliquam purus. Scelerisque mauris pellentesque pulvinar pellentesque. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Maecenas volutpat blandit aliquam etiam. Vel risus commodo viverra maecenas. Gravida cum sociis natoque penatibus. Consectetur a erat nam at lectus urna duis convallis. Et molestie ac feugiat sed lectus."
    }
    return {
      author: d["author"],
      title: d["title"],
      description: d["description"],
      url: d["url"],
      image: d["urlToImage"],
      publishedAt: new Date(d["publishedAt"]),
      content: content,
      source: d["source"]["name"],
      bias: bias_mode
    };
  }

  getArticles() {
    this.articles = [];
    for (var i in this.data) {
      var d = this.data[i];
      var a = this.createArticle(d);
      this.articles.push(a);
    }
  }
}
