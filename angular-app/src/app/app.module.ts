import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatSidenavModule, MatMenuModule, MatToolbarModule, MatGridListModule, MatSlideToggleModule,
  MatCardModule, MatExpansionModule, MatIconModule, MatListModule, MatButtonModule, MatChipsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchCardComponent } from './search-card/search-card.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsApiService } from './services/newsapi-service';
import { UserService } from './services/users-service';
import * as $ from 'jquery';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'ngx-avatar';
import { NavbarComponent } from './navbar/navbar.component';
import 'chart.js';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchCardComponent,
    NewsCardComponent,
    NavbarComponent,
    LeaderboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule, AvatarModule,
    MatSidenavModule, MatSlideToggleModule, MatMenuModule, MatGridListModule,
    MatToolbarModule, MatCardModule, MatExpansionModule, MatIconModule, MatListModule,
    MatButtonModule, MatChipsModule,
    BrowserAnimationsModule
  ],
  providers: [NewsApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
