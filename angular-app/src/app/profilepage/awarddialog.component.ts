import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DialogData} from "./profilepage.component";

@Component({
  selector: 'awarddialog',
  styleUrls: ['./awarddialog.component.css'],
  templateUrl: './awarddialog.component.html',
})

export class AwardDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AwardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
