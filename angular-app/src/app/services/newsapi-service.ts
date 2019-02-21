import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
    providedIn: 'root'
})
export class NewsApiService {

    api_key = '488fbf928009426ebd6abd22e4fb3fca';
    // hideNavbar: boolean = false;
    public showNavbar = new BehaviorSubject<boolean>(false); // {1} FALSE == HIDING

    constructor(private http: HttpClient) { }

    hideHeader() {
        this.showNavbar.next(false);
    }
    showHeader() {
        this.showNavbar.next(true);
    }

    initSources() {
        return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
    }
    initArticles() {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
    }
    getArticlesByID(source: String) {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
    }
    getHeadlinesInWorld() {
        return this.http.get('https://newsapi.org/v2/top-headlines?' + 'apiKey=' + this.api_key);
    }
    getHeadlinesInUS() {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=us' + '&apiKey=' + this.api_key);
    }
    getArticleBySource(source: String) {
        return this.http.get("https://newsapi.org/v2/top-headlines?sources=" + source + "&apiKey=" + this.api_key)
    }
    getArticleByCountry(country: String) {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=' + this.api_key);
    }
    getArticleByQuery(query: String) {
        return this.http.get('https://newsapi.org/v2/everything?q=' + query + '&apiKey=' + this.api_key)
    }
} 