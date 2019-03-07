import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DialogData} from "./articlepage.component";

@Component({
  selector: 'gamedialog',
  styleUrls: ['./gamedialog.component.css'],
  templateUrl: './gamedialog.component.html',
})

export class GameDialogComponent{

  public success: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<GameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.success = data.guessed == data.bias
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
