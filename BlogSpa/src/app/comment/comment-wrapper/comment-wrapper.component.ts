//////////////////////////////
// Poglavlje 3.5 - Komponente
/////////////////////////////
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-comment-wrapper",
  templateUrl: "./comment-wrapper.component.html",
  styleUrls: ["./comment-wrapper.component.scss"],
})
export class CommentWrapperComponent implements OnInit {
  constructor() {}

  isDisplayMode: boolean = true;

  ngOnInit() {}
}
