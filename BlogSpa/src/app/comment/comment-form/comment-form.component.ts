//////////////////////////////
// Poglavlje 3.5 - Komponente
/////////////////////////////
import { CommentService } from "./../../_services/comment.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-comment-form",
  templateUrl: "./comment-form.component.html",
  styleUrls: ["./comment-form.component.scss"],
})
export class CommentFormComponent implements OnInit {
  constructor(
    private commentService: CommentService,
    private toastr: ToastrService
  ) {}

  commentContent: string;
  @Output() commented = new EventEmitter<any>();

  ngOnInit() {}

  saveComment() {
    this.commented.emit(this.commentContent);
    this.commentContent = "";
  }
}
