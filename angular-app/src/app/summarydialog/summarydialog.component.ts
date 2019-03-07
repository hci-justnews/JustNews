import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SummarizerService } from '../services/summarizer.service';

@Component({
  selector: 'app-summarydialog',
  templateUrl: './summarydialog.component.html',
  styleUrls: ['./summarydialog.component.css']
})
export class SummarydialogComponent implements OnInit {
  private loading = true;
  private sentences: string[] = [];
  constructor(
    public dialogRef: MatDialogRef<SummarydialogComponent>,
    private summarizer: SummarizerService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.getSummary(data.url);
  }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  getSummary(url: string) {
    var _this = this
    this.summarizer.getSummary(url).subscribe((value) => { _this.loadItems(value["items"]) }, (error) => { _this.loadTemplate() });
  }
  loadItems(items: any) {
    console.log(items)
    for (var i in items) {
      if (items[i]["weight"] > 0.5)
        this.sentences.push(items[i]["text"]);
    }
    console.log(this.sentences.length)
    this.loading = false;
  }
  loadTemplate() {
    this.sentences.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum.")
    this.sentences.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum.")
    this.sentences.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum.")
    this.sentences.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eufugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum.")

    this.loading = false;
  }


}
