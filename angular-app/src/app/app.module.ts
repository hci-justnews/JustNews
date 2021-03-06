import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule, routingComponents} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {
  MatSidenavModule,
  MatMenuModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatChipsModule,
  MatCheckboxModule,
  MatFormFieldModule
} from "@angular/material";
import {MatDialogModule} from "@angular/material/dialog"
import {FormsModule} from "@angular/forms";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FlexLayoutModule} from "@angular/flex-layout";
import {SearchCardComponent} from "./search-card/search-card.component";
import {NewsCardComponent} from "./news-card/news-card.component";
import {NewsApiService} from "./services/newsapi-service";
import {UserService} from "./services/users-service";
import * as $ from "jquery";
import {HttpClientModule} from "@angular/common/http";
import {AvatarModule} from "ngx-avatar";
import {NavbarComponent} from "./navbar/navbar.component";
import {LeaderboardComponent} from "./leaderboard/leaderboard.component";
import {ChartistModule} from "ng-chartist";
import {ChartComponent} from "./chart/chart.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {GameDialogComponent} from "./articlepage/gamedialog.component";
import {AwardDialogComponent} from "./profilepage/awarddialog.component";
import { SummarizerService } from './services/summarizer.service';
import { SummarydialogComponent } from './summarydialog/summarydialog.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchCardComponent,
    NewsCardComponent,
    NavbarComponent,
    LeaderboardComponent,
    ChartComponent,
    GameDialogComponent,
    AwardDialogComponent,
    SummarydialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartistModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatTooltipModule,
    AppRoutingModule,
    AvatarModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule
  ],
  entryComponents:[
    GameDialogComponent,
    AwardDialogComponent,
    SummarydialogComponent
  ],
  providers: [NewsApiService, UserService, SummarizerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
