import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})
export class SummarizerService {

    api_key = '7791b12e-4853-468a-a389-c14813c72868'

    constructor(private http: HttpClient) { }

    getSummary(url) {
        return this.http.get("https://api.intellexer.com/summarize?apikey=" + this.api_key + "&conceptsRestriction=10&&returnedTopicsCount=2&summaryRestriction=30&textStreamLength=2000&url=" + url)
    }
}