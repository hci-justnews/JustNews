import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule, MatMenuModule, MatToolbarModule, MatCardModule, MatExpansionModule, MatIconModule, MatListModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchCardComponent } from './search-card/search-card.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsApiService } from './services/newsapi-service';
import * as $ from 'jquery';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchCardComponent,
    NewsCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatSidenavModule, MatMenuModule, MatToolbarModule, MatCardModule, MatExpansionModule, MatIconModule, MatListModule, MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
