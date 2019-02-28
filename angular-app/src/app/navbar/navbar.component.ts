import { Component, OnInit, Input, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { User, UserService } from '../services/users-service';
import { NewsApiService } from '../services/newsapi-service';
import { Router, NavigationEnd } from '@angular/router';
import { MatDrawer } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() drawer: MatDrawer;
  @Input() show: boolean;
  public image: string = "assets/jessie.jpg";
  // public user: User;
  constructor(private newsapi: NewsApiService, private router: Router, private users: UserService) {

  }
  async ngOnInit() {

  }

  goToProfilePage() {
    this.router.navigate(['/', 'profile'])

  }
  goToLandingPage() {
    this.newsapi.closeDrawer();
    this.newsapi.hideHeader();
    this.router.navigate(['/', 'home']);
  }

}
