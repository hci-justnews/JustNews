import {Component, OnInit} from "@angular/core";
import {UserService} from "../services/users-service";

import {AwardDialogComponent} from "./awarddialog.component";
import {MatDialog} from "@angular/material";


export interface DialogData {
  award: string;
  img: string;
  achieved: boolean;
}

@Component({
  selector: "app-profilepage",
  templateUrl: "./profilepage.component.html",
  styleUrls: ["./profilepage.component.css"]
})

export class ProfilepageComponent implements OnInit {
  public name: string = "Jessie Schmidt";
  public age: number = 31;
  public boints: number = 5620;
  public bointsGoal: number = 50;
  public bointsToday: number = 23;
  public awards: string[] = [
    "Speed Reader",
    "Bias Expert",
    "Daily User",
    "Source Detective",
    "Fact Hero"
  ];
  public image: string = "assets/jessie.jpg";
  public data: number[] = [0.1, 0.023, -0.09, -0.17, -0.08, 0, 0.2];

  constructor(private users: UserService, private dialog: MatDialog) {

  }

  ngOnInit() {
    this.makeChart();
  }

  makeChart() {
  }

  buildAwardDialog(award, img, achieved) {
    const dialogRef = this.dialog.open(AwardDialogComponent, {
      width: '500px',
      data: {award: award, img: img, achieved: achieved}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
