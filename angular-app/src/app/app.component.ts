import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JustNews';
  @ViewChild('drawer') drawer: MatDrawer;
  constructor(private router: Router, ) {

  }
  async ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    try {
      this.router.navigate(['/', 'home']);
    } catch (err) {
      alert(err);
    }
  }

  getTopStories() {
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 0 } })
    this.drawer.toggle();
  }
  getWorldStories() {
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 1 } })
    this.drawer.toggle();
  }
  getCountryStories() {
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 2 } })
    this.drawer.toggle();
  }
  getChicagoStories() {
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 3 } })
    this.drawer.toggle();
  }
  getTechStories() {
    this.router.navigate(['/', 'newspage'], { queryParams: { id: 4 } })
    this.drawer.toggle();
  }
}
