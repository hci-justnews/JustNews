import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
    providedIn: 'root'
})
export class CurrentApiService {

    const headerDict = {
        'Authorization': 'kUb25qq4WLyrtDXxDEwSzkRtg9uf1CqfYIxGAZX6-2sjjjq4'
    }       

    const requestOptions = {
        headers: new Headers(headerDict), 
    };

    constructor(private http: HttpClient) { }

    getArticles() {
        return this.http.get('https://api.currentsapi.services/v1/latest-news', requestOptions);
    }
    
}